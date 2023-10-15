import { configureStore } from '@reduxjs/toolkit';
import web3ApiReducer from '../reducers/web3ApiReducer';
const store = configureStore({
    reducer: {
        web3Api: web3ApiReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store;