import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({ addEntry, description, value, isExpense, setValue, setDescription, setIsExpense }) {
  return (
    <Form unstackable>
      <EntryForm description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

      <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense} />
    </Form>
  )
}

export default NewEntryForm
