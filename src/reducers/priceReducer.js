import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    price: 0.001,
}
const nftPriceSlice = createSlice({
    name: 'nftPrice',
    initialState,
    reducers: {
        setNftPrice: (state, action) => {
            state.price = action.payload.price;
            console.log("Price changed in reducer ==> ", state.price, action.payload.price);
        }
    }
});
export const { setNftPrice } = nftPriceSlice.actions;
export default nftPriceSlice.reducer;