import React from 'react'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import  Button  from "../Button"
import { NO_MODAL_DELE, YES_MODAL_DELE } from "../../Redux/Feature/contactSlice"
import { toast, ToastContainer } from 'react-toastify';



export const DeletModal = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.contactData)

    const yesDelet = () => {
        dispatch(YES_MODAL_DELE())
        toast.success("Delet is successfuly!")
    }

    const noDelet = () => {
       dispatch(NO_MODAL_DELE())
    }

  return (
    <>
    <ToastContainer/>

    <div className={styles.overlay}>
        <div className={styles.wrapper}>
        <p className={styles.para}>Are you sure you want to delete?</p>
        <div className={styles.btns}>
           <Button clickHandler={yesDelet} styleBtn={'green'}>{"Yes"}</Button>
           <Button clickHandler={noDelet} styleBtn={'red'}>{"No"}</Button>
        </div>
    </div>
    </div>
    </>
  )
}