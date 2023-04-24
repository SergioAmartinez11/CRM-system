import * as actionTypes from './types';

export const getListOfEmployees = (list) => ({type:actionTypes.GET_EMPLOYEES_LIST, payload:{employees: list}});