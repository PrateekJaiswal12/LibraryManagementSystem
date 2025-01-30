import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./slices/AuthSlice";
import modalReducer from "./slices/ModalSlice";

export const store = configureStore({
    reducer:{
        authentication: AuthenticationReducer,
        modal: modalReducer
    }
});

export default store;