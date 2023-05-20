import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stepper: 0,
  dashboardSelect: 'algo',
  productModal: {},
  employeeModal: {},
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    stepState: (state, action) => {
      const { activeStep } = action.payload
      state.stepper = activeStep
    },
    dashboardState: (state, action) => {
      const { option } = action.payload
      state.dashboardSelect = option
    },
    toggleProductModal: (state, action) => {
      state.productModal = action.payload
    },
    toggleEmployeeModal: (state, action) =>{
      state.employeeModal = action.payload
    }
  },
})

export const { stepState, dashboardState, toggleProductModal, toggleEmployeeModal } =
  commonSlice.actions
export default commonSlice.reducer
