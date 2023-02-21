import { createSlice } from "@reduxjs/toolkit";

const initialState={
    // contactList:JSON.parse(localStorage.getItem("contactList")),
    disabledBtn:true
}
 export const contactSlice=createSlice({
    name:'contactData',
    initialState,
    reducers:{
        addToContactList(state,action){

        }
    }
})
export const {
  addToContactList
}=contactSlice.actions
export default contactSlice.reducer