import { combineReducers } from "redux";
import employeesList from './employeesList';

const rootReducer = combineReducers({
    employeesList : employeesList,
})

export default rootReducer;