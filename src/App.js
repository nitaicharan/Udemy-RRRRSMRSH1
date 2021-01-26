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
import axios from 'axios'

function App() {
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);

  const entries = useSelector(state => state.entries)
  const { isOpen, id } = useSelector(state => state.modals);

  useEffect(() => {
    setIncomeTotal(entries.reduce((previous, current) => current.isExpense ? previous : previous + Number(current.value), 0));
    setExpenseTotal(entries.reduce((previous, current) => current.isExpense ? previous + Number(current.value) : previous, 0));
    setTotal(entries.reduce((previous, current) => current.isExpense ? previous - current.value : previous + Number(current.value), 0));
  }, [entries])

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  async function fetchInitialData(){
    const result = await axios.get('http://localhost:3001/entries')
    console.log(result);
  }
  
  useEffect(()=> {
    fetchInitialData();
  },[])

  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' title='Your Balance: ' value={total} />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries} />

      <MainHeader title='Add new transaction' type='h3' />

      <NewEntryForm />

      <ModelEdit isOpen={isOpen} {...entry} />

    </Container>
  );
}

export default App;