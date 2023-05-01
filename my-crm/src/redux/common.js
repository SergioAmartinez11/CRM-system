import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    stepperToggle : false,
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers:{
        toggleSteper: (state, action) => {
            state.stepperToggle = !state.stepperToggle;
        }
    }
})

export const {toggleSteper} = commonSlice.actions;
export default commonSlice.reducer;