import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { addEntryRedux } from '../actions/entries.action';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch();

  function addEntry(params) {
    dispatch(addEntryRedux({
      id: uuidv4(),
      description,
      value,
      isExpense
    }));

    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Form unstackable>
      <EntryForm description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

      <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense} />
    </Form>
  )
}

export default NewEntryForm
