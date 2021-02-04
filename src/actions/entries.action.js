const addEntryRedux = (payload) => ({ type: 'ADD_ENTRY', payload });

const removeEntryRedux = (id) => ({ type: 'REMOVE_ENTRY', payload: { id } });