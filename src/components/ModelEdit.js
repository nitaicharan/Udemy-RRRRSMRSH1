import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModelEdit({ isOpen, setIsOpen, description, value, isExpense, setValue, setDescription, setIsExpense }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModelEdit
