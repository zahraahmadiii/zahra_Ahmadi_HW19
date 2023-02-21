import { configureStore } from "@reduxjs/toolkit"; 
import contactSlice from "./Feature/contactSlice"
export const store=configureStore({
    reducer:{
        contactData:contactSlice
    }
})