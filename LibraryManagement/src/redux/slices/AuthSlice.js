import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loggedInUser: undefined,
    loading: false,
    error: false,
    registerSuccess: false,
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async(user, thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8000/auth/login', user);
            return req.data.user
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async(user, thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8000/auth/register', user);
            return req.data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const AuthenticationSlice = createSlice({
    name: 'authenticated',
    initialState,
    reducers: {
        resetRegisterSuccess(state) {
            state = {
                ...state,
                registerSuccess: false
            }

            return state
        }
    },
    extraReducers: (builder) => {
        // Pending Logic
        builder.addCase(loginUser.pending, (state, action) => {
            state = {
                ...state,
                error: false,
                loading: true
            }

            return state;   
        });

        builder.addCase(registerUser.pending, (state, action) => {
            state = {
                ...state,
                error: false,
                loading: true
            }
            
            return state;
        })

        // Resolve Logic
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state = {
                ...state,
                loading: false,
                loggedInUser: action.payload
            }
            return state;
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
            state = {
                ...state,
                loading: false,
                registerSuccess: true
            }
            return state;
        });

        // Rejected Logic
        builder.addCase(loginUser.rejected, (state, action) => {
            state = {
                ...state,
                loading: false,
                error: true
            }

            return state;
        });

        builder.addCase(registerUser.rejected, (state, action) => {
            state = {
                ...state,
                loading: false,
                error: true
            }

            return state;
        });

    }
}) 

export const { resetRegisterSuccess } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;