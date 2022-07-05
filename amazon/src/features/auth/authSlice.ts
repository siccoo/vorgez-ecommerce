import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DisplayUser } from "./models/DisplayUser.interface";
import { Jwt } from "./models/Jwt";
import { NewUser } from "./models/NewUser";

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

interface AuthState extends AsyncState {
    user?: DisplayUser;
    jwt?: Jwt;
    isAuthenticated?: boolean
}

const initialState: AuthState = {
    user: null,
    jwt: null,
    isAuthenticated: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const register = createAsyncThunk(
    'auth/register',
    async (user: NewUser, thunkAPI) => {
        try {
            
        } catch (error) {
            return thunkAPI.rejectWithValue('Unable to register!')
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.
        // REGISTER
        addCase()
    },
})