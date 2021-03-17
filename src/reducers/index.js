import { combineReducers } from 'redux';

const moneyLeftReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_BUDGET':
            console.log(state);
            return state + Number(action.payload)
        case 'SUBTRACT_BUDGET':
            return state - action.payload
        default:
            return state;
    }
};

const budgetItemLists = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            return [...state, action.payload]
        case 'REMOVE_ITEM':
            return [...state.filter(item => item !== action.payload)]
        default:
            return state;
    }
}

export default combineReducers({
    budget: moneyLeftReducer,
    budgetItemList: budgetItemLists
});