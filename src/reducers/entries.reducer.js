const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return state.concat(action.payload);
        case 'REMOVE_ENTRY':
            return state.filter(entry => entry.id !== action.payload.id);
        case 'UPDATE_ENTRY':
            const newEntry = [...state]
            const index = newEntry.findIndex(entry => entry.id = action.payload.id);
            newEntry[index] = { ...action.payload.entry };
            return newEntry;
        default:
            return state;
    }
};

export default reducer;

var initialState = [
    {
        id: 1,
        description: 'Work incomme',
        value: 1000.00,
        isExpense: false,
    },
    {
        id: 2,
        description: 'Water bill',
        value: 20.00,
        isExpense: true,
    },
    {
        id: 3,
        description: 'Rent',
        value: 300.00,
        isExpense: true,
    },
    {
        id: 4,
        description: 'Power bill',
        value: 50.00,
        isExpense: true,
    },
];