export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return state.concat(action.payload);
        case 'REMOVE_ENTRY':
            return state.filter(entry => entry.id !== action.payload.id);
        default:
            return state;
    }
};

var initialState = [
    {
        id: 1,
        description: 'Work incomme redux',
        value: 1000.00,
        isExpense: false,
    },
    {
        id: 2,
        description: 'Water bill redux',
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