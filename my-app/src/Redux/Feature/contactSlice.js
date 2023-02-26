import { createSlice } from "@reduxjs/toolkit";

const initialState={ 
  ContactData: [],
  deletMood:false,
  editMood:false,
  id:0  
}
  

 const contactSlice=createSlice({
    name:'contactData',
    initialState,
    reducers:{
      SUBMITE: (state, action) => {
        state.ContactData = action.payload
    },

    EDITICON:(state,action) => {
      state.editMood = true
      state.id = action.payload 
    },

    EDIT_CONTACT:(state,action) => {

      state.ContactData = action.payload
      
      let newObj = {}
      let getLocalData = JSON.parse(localStorage.getItem('contact'))
      const findIndex = getLocalData.findIndex(item => item.id === state.id)
     
      getLocalData.map(item => { 
        if(item.id === state.id){
          
          item.name = state.ContactData.name
          item.lastName = state.ContactData.lastName
          item.email = state.ContactData.email
          item.selected= state.ContactData.selected

          newObj = {name:item.name,lastName:item.lastName, email:item.email,selected:item.selected}
        }
        return
      })
      getLocalData.splice(findIndex,1,newObj)
      localStorage.setItem('contact',JSON.stringify(getLocalData))
    },

    DELETMODAL:(state,action) => {
      state.deletMood = true
      state.id = action.payload
    },

    NODELETE :(state,action) => {
      state.deletMood = false
    },

    YESDELETE:(state,action) => {
      state.ContactData = action.payload
      state.deletMood = false   

      //get data from local storage for delete item
      let getLocalData = JSON.parse(localStorage.getItem('contact'))
      let localArray = []
      localArray = getLocalData
      const findIndex = localArray.findIndex(item => item.id === state.id)
      localArray.splice(findIndex,1)
      localStorage.setItem('contact',JSON.stringify(localArray))
    },
    }
})
export const {SUBMITE , EDITICON , DELETMODAL , NODELETE , YESDELETE, EDIT_CONTACT}=contactSlice.actions
 
export default contactSlice.reducer