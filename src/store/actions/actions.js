export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}
export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        value
    }
}
export const add = (value) => {
    return {
        type: 'ADD',
        value
    }
}
export const substract = (value) => {
    return {
        type: 'SUBSTRACT',
        value
    }
}
export const storeResult = (result) => {
    return {
        type: 'STORE_RESULT',
        result
    }
}
export const deleteResult = (id) => {
    return {
        type: 'DELETE_RESULT',
        id
    }
}