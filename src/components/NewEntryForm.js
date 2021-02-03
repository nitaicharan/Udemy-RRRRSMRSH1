import React from 'react';
import { Form } from 'semantic-ui-react';
import NewEntryFrom, { } from "../hooks/userEntryDetails";
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm() {
  const {
    value,
    setValue,
    description,
    setDescription,
    isExpense,
    setIsExpense,
    addEntry,
  } = NewEntryFrom();

  return (
    <Form unstackable>
      <EntryForm description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

      <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense} />
    </Form>
  )
}

export default NewEntryForm
