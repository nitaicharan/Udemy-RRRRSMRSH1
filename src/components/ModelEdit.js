import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { closeEditModal } from '../actions/modals.action';
import EntryForm from './EntryForm';

function ModelEdit({ isOpen, description, value, isExpense, setValue, setDescription, setIsExpense }) {
    const dispatch = useDispatch();

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm description={description} isExpense={isExpense} value={value} setValue={setValue} setDescription={setDescription} setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => dispatch(closeEditModal())} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModelEdit
