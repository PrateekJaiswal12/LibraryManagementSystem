import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayLogin: true,
    displayLibraryCard: false,
    displayLoan: false
} 

export const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setDisplayLogin(state, action){
            state = {
                ...state,
                displayLogin: action.payload
            }
            return state;
        },

        setDisplayLibraryCard(state, action){
            state = {
                ...state,
                displayLibraryCard: action.payload
            }

            return state;
        },

        setDisplayLoan(state, action) {
            state = {
                ...state,
                displayLoan: action.payload
            }

            return state;
        }
    }
})

export const {setDisplayLibraryCard, setDisplayLoan, setDisplayLogin} = ModalSlice.actions;

export default ModalSlice.reducer;