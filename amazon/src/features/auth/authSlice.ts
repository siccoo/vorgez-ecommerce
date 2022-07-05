import { createSlice } from "@reduxjs/toolkit";
import { DisplayUser } from "./models/DisplayUser.interface";
import { Jwt } from "./models/Jwt";

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

const initialState: 

export const authSlice = createSlice({
    name: 'auth',
    initialState
})