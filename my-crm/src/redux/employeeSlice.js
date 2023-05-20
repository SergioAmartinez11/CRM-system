import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAllEmployees } from '../utils/api/employee'

const initialState = {
  employees: [],
}

const baseURL = 'http://localhost:3003'

//slice que almacena el estado actual de los empleados.
//la informacio es proporcionada de la base de datos.
export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    updateEmployees: (state, action) => {
      const { newList } = action.payload
      state.employees = newList
    },
  },
})

export const { updateEmployees } = employeeSlice.actions

export const fetchAllEmployees = () => async (dispatch) => {
  try {
    const list = await getAllEmployees()
    let newList = list.reverse();
    dispatch(updateEmployees({ newList }))
  } catch (error) {
    //dispatch(loginFailure(error.code))
    console.log(error)
  }
}

export default employeeSlice.reducer
