import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({ addEntry }) {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [isExpense, setIsExpense] = useState(false)

  return (
    <Form unstackable>
      <EntryForm description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />

      <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense} />
    </Form>
  )
}

export default NewEntryForm
