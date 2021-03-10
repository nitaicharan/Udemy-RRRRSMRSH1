import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { closeEditModal } from '../actions/modals.action';
import userEntryDetails from "./../hooks/userEntryDetails";
import EntryForm from './EntryForm';

function ModelEdit({ isOpen, description, value, isExpense }) {
    const dispatch = useDispatch();
    const entryUpdate = userEntryDetails(description, value, isExpense);

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm  {...entryUpdate} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => dispatch(closeEditModal())} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModelEdit
