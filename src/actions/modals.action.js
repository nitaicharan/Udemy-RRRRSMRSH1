const type = {
    OPEN_EDIT_MODAL: 'OPEN_EDIT_MODAL',
    CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL',
}

export default type;

export const openEditModal = (id) => ({ type: type.OPEN_EDIT_MODAL, payload: { id } });

export const closeEditModal = () => ({ type: type.CLOSE_EDIT_MODAL });