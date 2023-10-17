import { configureStore } from '@reduxjs/toolkit';
import web3ApiReducer from '../reducers/web3ApiReducer';
import TokenSupply from '../reducers/supplyReducer';
import nftPriceSlice from '../reducers/priceReducer';
import preSaleReducer from '../reducers/preSaleReducer';
const store = configureStore({
    reducer: {
        web3Api: web3ApiReducer,
        tokenSupply: TokenSupply,
        nftprice: nftPriceSlice,
        preSaleStatus: preSaleReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store;