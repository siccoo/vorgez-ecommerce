import { createSlice } from "@reduxjs/toolkit";

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

interface AuthState extends AsyncState {
    
}

const initialState: 

export const authSlice = createSlice({
    name: 'auth',
    initialState
})