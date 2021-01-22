import entriesTypes from "./../actions/entries.action";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case entriesTypes.POPULATE_ENTRIES:
            return action.payload;
        case entriesTypes.ADD_ENTRY:
            return state.concat(action.payload);

        case entriesTypes.REMOVE_ENTRY:
            return state.filter(entry => entry.id !== action.payload.id);
        case entriesTypes.POPULATE_ENTRY_DETAIL:
        case entriesTypes.UPDATE_ENTRY:
            const newEntry = [...state]
            const index = newEntry.findIndex(entry => entry.id === action.payload.id);
            newEntry[index] = { ...newEntry[index], ...action.payload.entry };
            return newEntry;
        default:
            return state;
    }
};

export default reducer;

var initialState = [];