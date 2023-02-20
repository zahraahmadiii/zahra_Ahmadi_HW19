import React from 'react'
import Button from '../Button';
import Input from '../Input';
import styles from './style.module.css'

const ManageContact = () => {
  return (
    <div className={styles.form}>
      <h2 className={styles.h2}> وب اپلیکیشن مدیریت مخاطبین</h2>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Button/>
    </div>
  )
}

export default ManageContact;