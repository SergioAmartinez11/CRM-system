import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    stepper : 0,
    dashboardSelect: 'algo',
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers:{
        stepState: (state, action) => {
            const {activeStep} = action.payload;
            state.stepper = activeStep;
        },
        dashboardState: (state, action) =>{
            const { option } = action.payload;
            state.dashboardSelect = option;
            
        }
    }
})

export const {stepState, dashboardState} = commonSlice.actions;
export default commonSlice.reducer;