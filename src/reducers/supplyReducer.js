import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = { totalSupply: 0, maxSupply: 0, currentToken: 0 }

const setSupply = createAsyncThunk('web3Api/setSupply', async (web3Payload, thunkAPI) => {
    return {
        totalSupply: web3Payload.totalSupply,
        maxSupply: web3Payload.maxSupply,
        currentToken: web3Payload.currentToken,
    }
})

const TokenSupply = createSlice({
    name: 'TokenSupply',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setSupply.fulfilled, (state, action) => {
            console.log('accepted the token supply ==> ', action.payload);
            state.totalSupply = action.payload.totalSupply;
            state.maxSupply = action.payload.maxSupply;
            state.currentToken = action.payload.currentToken;
        });
    }
})
export { setSupply };
export default TokenSupply.reducer;