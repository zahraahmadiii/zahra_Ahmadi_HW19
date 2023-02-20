import React from 'react'
import Button from '../Button';
import Input from '../Input';
import styles from './style.module.css'

const ManageContact = () => {
  return (
    <div className={styles.form}>
      <h2 className={styles.h2}> وب اپلیکیشن مدیریت مخاطبین</h2>
      <Input type={'text'} placeholder={"نام..."}/>
      <Input type={'text'} placeholder={"نام خانوادگی..."}/>
      <Input type={'text'} placeholder={"شماره تماس..."}/>
      <select className={styles.select}>
        <option value=''>نسبت</option>
        <option value=''>اعضای خانواده</option>
        <option value=''>دوست</option>
        <option value=''>همکار</option>
      </select>
      <Input type={'email'} placeholder={"ایمیل..."}/>
     <Input type={'button'} title={"اضافه کردن"} style={{cursor:"pointer"}} disabled={true}/>
    </div>
  )
}

export default ManageContact;