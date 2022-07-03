import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        auth: null
    }
})

export type RootState = ReturnType<typeof store.getState>;