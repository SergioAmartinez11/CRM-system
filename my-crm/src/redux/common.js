import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    stepper : 0,
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers:{
        stepState: (state, action) => {
            const {activeStep} = action.payload;
            state.stepper = activeStep;
        }
    }
})

export const {stepState} = commonSlice.actions;
export default commonSlice.reducer;