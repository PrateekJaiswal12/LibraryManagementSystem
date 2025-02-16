import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: true,
    error: false,
    books: [],
    currentBook: undefined,
    pagingInformation: null
}

export const fetchAllBooks = createAsyncThunk(
    'book/all',
    async (payload, thunkAPI) => {
        try {
            const req = await axios.get('http://localhost:8000/book/');
            return req.data.books;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const queryBooks = createAsyncThunk(
    'book/query',
    async(payload, thunkAPI) => {
        try {
            const req = await axios.get(`http://localhost:8000/book/query${payload}`);
            return req.data.page;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const checkoutBook = createAsyncThunk(
    'book/checkout',
    async(payload, thunkAPI) => {
        try {
            const returnDate = new Date();
            returnDate.setDate(returnDate.getDate() + 14);

            const getPatron = await axios.get(`http://localhost:8000/card/${payload.libraryCard}`);
            let patronId = getPatron.data.libraryCard.user._id;

            const record = {
                status: 'LOANED',
                loanedDate: new Date(),
                dueDate: returnDate,
                patron: patronId,
                employeeOut: payload.employee._id,
                item: payload.book._id
            }

            const loadReq = await axios.get(`http://localhost:8000/loan`, record);
            const loan = loadReq.data.record;

            return loan;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const checkinBook = createAsyncThunk(
    'book/checkin',
    async(payload, thunkAPI) => {
        try {
            const record = payload.book.records[0];

            const updatedRecord = {
                status: 'AVAILABLE',
                loanedDate: record.loanedDate,
                dueDate: record.dueDate,
                returnDate: new Date(),
                patron: record.patron,
                employeeOut: record.employeeOut,
                employeeIn: payload.employee._id,
                item: record.item,
                _id: record._id
            }

            const loan = await axios.put(`http://localhost:8000/loan/`, updatedRecord);

            return loan.data.record;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const BookSlice = createSlice({
    name:'book',
    initialState,
    reducers: {
        setCurrentBook(state, action) {
            state = {
                ...state,
                currentBook: action.payload
            }
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBooks.pending, (state, action) => {
            state = {
                ...state,
                books: [],
                loading: true
            }

            return state;
        })

        builder.addCase(queryBooks.pending, (state, action) => {
            state= {
                ...state,
                books: [],
                loading: true
            }

            return state;
        })

        builder.addCase(checkoutBook.pending, (state, action) => {
            state = {
                ...state,
                loading: true,
            }

            return state;
        })
    
        builder.addCase(checkinBook.pending, (state, action) => {
            state = {
                ...state,
                loading: true,
            }

            return state;
        })



        builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
            state = {
                ...state,
                loading: false,
                books: action.payload
            }

            return state;
        })

        builder.addCase(queryBooks.fulfilled, (state, action) => {
            state = {
                ...state,
                books: action.payload.items,
                pagingInformation: {
                    totalCount: action.payload.totalCount,
                    currentPage: action.payload.currentPage,
                    totalPages: action.payload.totalPages,
                    limit: action.payload.limit,
                    pageCount: action.payload.pageCount
                },
                loading: false,
            }

            return state;
        })

        builder.addCase(checkoutBook.fulfilled, (state, action) => {
            let bookList = JSON.parse(JSON.stringify(state.books));

            bookList = bookList.map((book) => {
                if(book._id === action.payload.item) {
                    book.records = [action.payload, ...book.records];
                    return book;
                }

                return book;
            })

            state = {
                ...state,
                loading: false,
                books: bookList
            }

            return state;
        });

        builder.addCase(checkinBook.fulfilled, (state, action) => {
            let bookList = JSON.parse(JSON.stringify(state.books));

            bookList = bookList.map((book) => {
                if(book._id === action.payload.item) {
                    book.records.splice(0, 1, action.payload);
                    return book;
                }

                return book;
            })

            state = {
                ...state,
                loading: false,
                books: bookList
            }

            return state;
        })

    }
})



export const { setCurrentBook } = BookSlice.actions;
export default BookSlice.reducer