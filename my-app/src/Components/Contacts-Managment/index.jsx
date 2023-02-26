import React, { useState } from 'react'
import Input from '../Input';
import styles from './style.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { UseInput } from '../hooks/UseInput'; 
import { UserSchema } from "../../Validations/UserValidation"; 
import { SUBMITE, EDIT_CONTACT } from "../../Redux/Feature/contactSlice"
import { ToastContainer, toast} from 'react-toastify'

const ManageContact = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.contactData)
    const [ableBtn,setAbleBtn]=useState(true)
 
  const validateForm= async()=>{
  
    let formData={
      name,
      lastName,
      phone,
      email,
    }
    console.log(formData);
    try {
     await UserSchema.validate(formData)
     setAbleBtn(false)
   }
   catch(error){
     setAbleBtn(true)
   }
  
  }


const {enteredValue:name,changeValueHandler:namechangeHandler}=UseInput(validateForm)
const {enteredValue:lastName,changeValueHandler:LastNamechangeHandler}=UseInput(validateForm)
const {enteredValue:phone,changeValueHandler:phoneNumchangeHandler}=UseInput(validateForm)
const {enteredValue:email,changeValueHandler:emailchangeHandler}=UseInput(validateForm)
const {enteredValue:selected,changeValueHandler:selectchangeValueHandler}=UseInput(validateForm)



const onSubmitHandler = (event) => {
  event.preventDefault()
  dispatch(SUBMITE({
    payload: {
        name:name,
        lastName:lastName,
        selected:selected,
        email:email}
  })) 

 if(!state.editMood){  
    toast.success('Adding is successfully')
 }   
  setLocal()
 };

const setLocal = () => {

  let newObj = {
      id:Date.now(),
      name:name,
      lastName:lastName,
      selected:selected,
      email:email,  
  } 

  const oldInfo = JSON.parse(localStorage.getItem('contact') || '[]');
        oldInfo.push(newObj)
        localStorage.setItem('contact', JSON.stringify(oldInfo));

}

const editClick = () => {

  dispatch(EDIT_CONTACT(
     {name:name,
      lastName:lastName,
      selected:selected,
      email:email
    }
  ))
  if(state.editMood){
      toast.success('Editing is successfully')
  }    
}



  return (
    <>
    <ToastContainer/>
    
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <h2 className={styles.h2}> وب اپلیکیشن مدیریت مخاطبین</h2>
      <Input type={'text'} placeholder={"نام..."} changeValue={namechangeHandler} topic={name}/>
      <Input type={'text'} placeholder={"نام خانوادگی..."} changeValue={LastNamechangeHandler} topic={lastName}/>
      <Input type={'text'} placeholder={"شماره تماس..."}  changeValue={phoneNumchangeHandler} topic={phone} />
      <select className={styles.select} onChange={selectchangeValueHandler} topic={selected}>
        <option value='نسبت'>نسبت</option>
        <option value='اعضای خانواده'>اعضای خانواده</option>
        <option value='دوست'>دوست</option>
        <option value='همکار'>همکار</option>
      </select>
      <Input type={'email'} placeholder={"ایمیل..."}  changeValue={emailchangeHandler} topic={email}/>
      {state.editMood?
      <Input type={'submit'}  style={{cursor:"pointer"}} disabled={ableBtn} clicked={editClick} title={"ویرایش"} BtnStyle={{cursor:'pointer', backgroundColor:'gray', color:'white'}} />
      :
     <Input type={'submit'} title={"اضافه کردن"} style={{cursor:"pointer"}} disabled={ableBtn} BtnStyle={{cursor:'pointer'}}/>
      }
     
    </form>
    </>
  )
}

export default ManageContact;