import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialState);

  const deleteEntry = (id) => setEntries(entries.filter(entry => entry.id !== id));


  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' title='Your Balance: ' value='2,550.53' />

      <DisplayBalances />

      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title='Add new transaction' type='h3' />

      <NewEntryForm />

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