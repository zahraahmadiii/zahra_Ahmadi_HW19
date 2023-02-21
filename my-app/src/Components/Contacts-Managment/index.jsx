import React from 'react'
import Input from '../Input';
import styles from './style.module.css'
import {useSelector} from 'react-redux'
import { UseInput } from '../hooks/UseInput';
import { UserSchema } from '../../Validations/UserValidation'; 
const ManageContact = () => {

const state=useSelector(state=>state.contactData)

const {value:name,changeValueHandler:namechangeHandler}=UseInput()
const {value:LastName,changeValueHandler:LastNamechangeHandler}=UseInput()
const {value:phoneNum,changeValueHandler:phoneNumchangeHandler}=UseInput()
const {value:email,changeValueHandler:emailchangeHandler}=UseInput()
const {value:selected,changeValueHandler:selectchangeValueHandler}=UseInput()



const onSubmitHandler = async(event) => {
  event.preventDefault()
  console.log(event);
  let formData={
    name:event.target[0].value,
    lastName:event.target[1].value ,
    mobile:event.target[2].value ,
    relationShip:event.target[3].value,
    email:event.target[4].value,
  }
  console.log(formData);
  const isValid=await UserSchema.isValid(formData)
};


  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <h2 className={styles.h2}> وب اپلیکیشن مدیریت مخاطبین</h2>
      <Input type={'text'} placeholder={"نام..."} changeValue={namechangeHandler}/>
      <Input type={'text'} placeholder={"نام خانوادگی..."} changeValue={LastNamechangeHandler}/>
      <Input type={'text'} placeholder={"شماره تماس..."}  changeValue={phoneNumchangeHandler} />
      <select className={styles.select} onChange={selectchangeValueHandler} >
        <option value='نسبت'>نسبت</option>
        <option value='اعضای خانواده'>اعضای خانواده</option>
        <option value='دوست'>دوست</option>
        <option value='همکار'>همکار</option>
      </select>
      <Input type={'email'} placeholder={"ایمیل..."}  changeValue={emailchangeHandler}/>
     <Input type={'submit'} title={"اضافه کردن"} style={{cursor:"pointer"}} disabled={state.disabledBtn}/>
    </form>
  )
}

export default ManageContact;