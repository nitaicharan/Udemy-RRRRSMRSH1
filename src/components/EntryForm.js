import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description, value, isExpense, setValue, setDescription, setIsExpense}) {
    return (
        <Fragment>
            <Form.Group>
                <Form.Input icon='tags' label='Description' width={12} planceholder='New shinny thing' onChange={(event) => setDescription(event.target.value)} value={description} />
                <Form.Input width={4} label='value' planceholder='100.00' icon='dollar' iconPosition='left' onChange={(event) => setValue(event.target.value)} value={value}></Form.Input>
            </Form.Group>

            <Segment compact>
                <Checkbox toggle label='is expense' checked={isExpense} onChange={() => setIsExpense(oldState => !oldState)} />
            </Segment>
        </Fragment>
    )
}

export default EntryForm
