const types = {
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
};

export default types;

export const addEntryRedux = (payload) => ({ type: types.ADD_ENTRY, payload });

export const removeEntryRedux = (id) => ({ type: types.REMOVE_ENTRY, payload: { id } });

export const updateEntryRedux = (id, entry) => ({ type: types.UPDATE_ENTRY, payload: { id, entry } });