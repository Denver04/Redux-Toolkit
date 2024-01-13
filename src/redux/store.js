import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./RootReducer";
import { thunk } from "redux-thunk";


export const store = configureStore({
    reducer: appReducer,
    middleware: [thunk]
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})