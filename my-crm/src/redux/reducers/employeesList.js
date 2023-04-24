import * as actionTypes from "../actions/types";

const initialState = {
    currentEmployees: []
};

const products = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EMPLOYEES_LIST:
            return {
                ...state,
                currentEmployees: action.payload.employees
            };
        default:
            return {...state};
    }
}

export default products;