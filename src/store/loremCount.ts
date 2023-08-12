import { configureStore } from "@reduxjs/toolkit";
import loremReducer from './loremSlice'

export const store = configureStore({
    reducer: {
        lorem: loremReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch