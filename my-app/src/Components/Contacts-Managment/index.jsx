import React from 'react'
import Input from '../Input';
import styles from './style.module.css'
import {useSelector} from 'react-redux'
import { UseInput } from '../hooks/UseInput';
const ManageContact = () => {
  
const state=useSelector(state=>state.contactData)

const {value:name,changeValueHandler:namechangeHandler}=UseInput()
const {value:LastName,changeValueHandler:LastNamechangeHandler}=UseInput()
const {value:phoneNum,changeValueHandler:phoneNumchangeHandler}=UseInput()
const {value:email,changeValueHandler:emailchangeHandler}=UseInput()

const submitHandler=(e)=>{
e.preventDefault()
}

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2 className={styles.h2}> وب اپلیکیشن مدیریت مخاطبین</h2>
      <Input type={'text'} placeholder={"نام..."} changeValue={namechangeHandler}/>
      <Input type={'text'} placeholder={"نام خانوادگی..."} changeValue={LastNamechangeHandler}/>
      <Input type={'text'} placeholder={"شماره تماس..."}  changeValue={phoneNumchangeHandler} />
      <select className={styles.select}>
        <option value=''>نسبت</option>
        <option value=''>اعضای خانواده</option>
        <option value=''>دوست</option>
        <option value=''>همکار</option>
      </select>
      <Input type={'email'} placeholder={"ایمیل..."}  changeValue={emailchangeHandler}/>
     <Input type={'button'} title={"اضافه کردن"} style={{cursor:"pointer"}} disabled={state.disabledBtn}/>
    </form>
  )
}

export default ManageContact;