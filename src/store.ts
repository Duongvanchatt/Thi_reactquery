import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "./services/service";


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
})