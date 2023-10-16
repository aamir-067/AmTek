import { configureStore } from '@reduxjs/toolkit';
import web3ApiReducer from '../reducers/web3ApiReducer';
import TokenSupply from '../reducers/supplyReducer';
import nftPriceSlice from '../reducers/priceReducer';
const store = configureStore({
    reducer: {
        web3Api: web3ApiReducer,
        tokenSupply: TokenSupply,
        nftprice: nftPriceSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store;