import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModelEdit from './components/ModelEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setentryId] = useState();
  const [total, setTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);

  const entries = useSelector(state => state.entries)
  const isOpenRedux = useSelector(state => state.modals.isOpen);

  useEffect(() => {
    setIncomeTotal(entries.reduce((previous, current) => current.isExpense ? previous : previous + Number(current.value), 0));
    setExpenseTotal(entries.reduce((previous, current) => current.isExpense ? previous + Number(current.value) : previous, 0));
    setTotal(entries.reduce((previous, current) => current.isExpense ? previous - current.value : previous + Number(current.value), 0));
  }, [entries])

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index] = { description, value, isExpense, id: entryId };
      // setEntries(newEntries);
      reSetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);


  const addEntry = () => {
    const newEntries = entries.concat({ description, value, id: entries.length + 1, isExpense });
    // setEntries(newEntries);
    reSetEntry();
  }

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

  const reSetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' title='Your Balance: ' value={total} />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries} editEntry={editEntry} />

      <MainHeader title='Add new transaction' type='h3' />

      <NewEntryForm addEntry={addEntry} description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

      <ModelEdit isOpen={isOpenRedux} setIsOpen={setIsOpen} description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

    </Container>
  );
}

export default App;