import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
      const { payload } = action.payload
      state.employees = payload
    },
  },
})

export const { updateEmployees } = employeeSlice.actions

export const fetchAllEmployees = () => async (dispatch) => {
  try {
    const response = await axios
      .get(`${baseURL}/employee/`, {})
      .then((response) => {
        return response.data
      })
    //const { token } = response.data
    //dispatch(updateEmployees({ token }))
    console.log(response)
  } catch (error) {
    //dispatch(loginFailure(error.code))
  }
}

export default employeeSlice.reducer
