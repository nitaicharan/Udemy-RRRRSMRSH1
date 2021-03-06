import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModelEdit from './components/ModelEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialState);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setentryId] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index] = { description, value, isExpense, id: entryId };
      setEntries(newEntries);
    }
  }, [isOpen])

  const deleteEntry = (id) => setEntries(entries.filter(entry => entry.id !== id));

  const addEntry = (description, value, isExpense) => setEntries(entries.concat({ description, value, id: entries.length + 1, isExpense }));

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setentryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }


  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' title='Your Balance: ' value='2,550.53' />

      <DisplayBalances />

      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />

      <MainHeader title='Add new transaction' type='h3' />

      <NewEntryForm addEntry={addEntry} description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

      <ModelEdit isOpen={isOpen} setIsOpen={setIsOpen} description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

    </Container>
  );
}

export default App;

var initialState = [
  {
    id: 1,
    description: 'Work incomme',
    value: '$1000,00',
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: '$20,00',
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300,00',
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: '$50,00',
    isExpense: true,
  },
]