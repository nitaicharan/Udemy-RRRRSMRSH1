import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setentries] = useState(initialState)
  
  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' title='Your Balance: ' value='2,550.53' />

      <DisplayBalances />

      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries} />

      <MainHeader title='Add new transaction' type='h3' />

      <NewEntryForm />

    </Container>
  );
}

export default App;

var initialState = [
  {
    description: 'Work incomme',
    value: '$1000,00',
    isExpense: false,
  },
  {
    description: 'Water bill',
    value: '$20,00',
    isExpense: true,
  },
  {
    description: 'Rent',
    value: '$300,00',
    isExpense: true,
  },
  {
    description: 'Power bill',
    value: '$50,00',
    isExpense: true,
  },
]