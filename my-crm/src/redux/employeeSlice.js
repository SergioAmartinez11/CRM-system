import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: {},
}

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
});

export const { updateEmployees } = employeeSlice.actions
export default employeeSlice.reducer;
