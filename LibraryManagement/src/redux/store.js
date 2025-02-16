import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./slices/AuthSlice";
import modalReducer from "./slices/ModalSlice";
import BookReducer from "./slices/BookSlice"


export const store = configureStore({
    reducer:{
        authentication: AuthenticationReducer,
        modal: modalReducer,
        book: BookReducer
    }
});

export default store;