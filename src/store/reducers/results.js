import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'STORE_RESULT': return {
            ...state,
            results: state.results.concat({ id: new Date(), value: action.result })
        };
        case actionTypes.DELETE_RESULT:
            const newResults = state.results.filter(result => result.id !== action.elementId)
            return {
                ...state,
                results: newResults
            };

        default: return state
    }
}

export default reducer;