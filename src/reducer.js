export const initialState = {
   transaction: [],
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_TRANSACTION':
            // Logic for adding item to transaction
        break;
        case 'REMOVE_FROM_TRANSACTION':
            // Logic for Removing item from transaction
            break;
        default:
            return state;
    }
}

export default reducer;
