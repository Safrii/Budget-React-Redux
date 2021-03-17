export const addBudgedMoney = (amount) => {
    return {
        type: 'ADD_BUDGET',
        payload: amount
    }
}

export const subtractBudgetMoney = (amount) => {
    return {
        type: 'SUBTRACT_BUDGET',
        payload: amount
    }
}

export const addItem = (item) => {
    return {
        type: 'ADD_NEW_ITEM',
        payload: item
    }

}

export const removeItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }

}
