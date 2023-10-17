import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'not started',
    scheduleTime: 0,
}
const preSaleReducer = createSlice({
    name: 'preSaleStatus',
    initialState,
    reducers: {
        setPreSaleStatue: (state, action) => {
            state.scheduleTime = action.payload.scheduleTime;
            state.status = action.payload.status;
        }
    }
});
export const { setPreSaleStatue } = preSaleReducer.actions;
export default preSaleReducer.reducer;