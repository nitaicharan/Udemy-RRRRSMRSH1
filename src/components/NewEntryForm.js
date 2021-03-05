import React, { useState } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm({ addEntry }) {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [isExpense, setIsExpense] = useState(false)

  return (
    <Form unstackable>

      <Form.Group>
        <Form.Input icon='tags' label='Description' width={12} planceholder='New shinny thing' onChange={(event) => setDescription(event.target.value)} value={description} />
        <Form.Input width={4} label='value' planceholder='100.00' icon='dollar' iconPosition='left' onChange={(event) => setValue(event.target.value)} value={value}></Form.Input>
      </Form.Group>

      <Segment compact>
        <Checkbox toggle label='is expense' checked={isExpense} onChange={() => setIsExpense(oldState=> !oldState)} />
      </Segment>

      <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} />
    </Form>
  )
}

export default NewEntryForm
