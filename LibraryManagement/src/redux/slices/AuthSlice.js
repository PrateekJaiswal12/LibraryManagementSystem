import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loggedInUser: undefined,
    profileUser: undefined,
    loading: false,
    error: false,
    registerSuccess: false,
    libraryCard: ""
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

export const fetchUser = createAsyncThunk(
    'auth/fetch',
    async(payload, thunkAPI) => {
        try {
            const req = await axios.get(`http://localhost:8000/users/${payload.userId}`);
            const user = req.data.user;

            return {
                user,
                property: payload.property
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const updateUser = createAsyncThunk(
    'auth/update',
    async(user, thunkAPI) => {
        try {
            const req = await axios.put(`http://localhost:8000/users`, user);
            return req.data.user;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getLibraryCard = createAsyncThunk(
    'auth/librarycard',
    async(userId, thunkAPI) => {
        try {
            const req = await axios.post(`http://localhost:8000/card/`,{user: userId});
            return req.data.libraryCard;
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
        },
        resetUser(state, action) {
            state = {
                ...state,
                [action.payload]: undefined
            }
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
        });

        builder.addCase(fetchUser.pending, (state, action) => {
            state = {
                ...state,
                error: false,
                loading: true
            }
            
            return state;
        });

        builder.addCase(updateUser.pending, (state, action) => {
            state = {
                ...state,
                error: false,
                loading: true
            }

            return state;
        })

        builder.addCase(getLibraryCard.pending, (state, action) => {
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

        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state = {
                ...state,
                loading: false,
                [action.payload.property]: action.payload.user
            }
            return state;
        });

        builder.addCase(updateUser.fulfilled, (state, action) => {
            state = {
                ...state,
                loggedInUser: action.payload,
                profileUser: action.payload,
                loading: false
            }

            return state;
        })

        builder.addCase(getLibraryCard.fulfilled, (state, action) => {
            state = {
                ...state,
                loading: false,
                libraryCard: action.payload._id
            }

            return state;
        })


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

        builder.addCase(fetchUser.rejected, (state, action) => {
            state = {
                ...state,
                loading: false,
                error: true
            }

            return state;
        });

        builder.addCase(updateUser.rejected, (state, action) => {
            state = {
                ...state,
                error: true,
                loading: false
            }

            return state;
        })
    }
}) 

export const { resetRegisterSuccess, resetUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;