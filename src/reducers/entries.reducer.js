import entriesTypes from "./../actions/entries.action";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case entriesTypes.ADD_ENTRY:
            return state.concat(action.payload);
        case entriesTypes.REMOVE_ENTRY:
            return state.filter(entry => entry.id !== action.payload.id);
        case entriesTypes.UPDATE_ENTRY:
            const newEntry = [...state]
            const index = newEntry.findIndex(entry => entry.id = action.payload.id);
            newEntry[index] = { ...action.payload.entry };
            return newEntry;
        default:
            return state;
    }
};

export default reducer;

var initialState = [];