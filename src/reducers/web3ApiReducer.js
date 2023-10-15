import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = { contract: null, provider: null, signer: null }
export const setupWeb3 = createAsyncThunk('web3Api/setupWeb3', async (web3Payload, thunkAPI) => {
    // your async calls here
    return {
        contract: web3Payload.contract,
        provider: web3Payload.provider,
        signer: web3Payload.signer,
    };
});
const web3Api = createSlice({
    name: 'web3Api',
    initialState,
    reducers: {
        reInitWeb3: (state, action) => {
            state.contract = action.payload.contract;
            state.provider = action.payload.provider;
            state.signer = action.payload.signer;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setupWeb3.fulfilled, (state, action) => {
            state.contract = action.payload.contract;
            state.provider = action.payload.provider;
            state.signer = action.payload.signer;
        });
    },
})
export const { reInitWeb3 } = web3Api.actions;
export default web3Api.reducer;