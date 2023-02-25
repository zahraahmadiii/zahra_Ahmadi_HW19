import React from 'react'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import  Button  from "../Button"
import { toast, ToastContainer } from 'react-toastify';
import { NODELETE, YESDELETE } from "../../Redux/Feature/contactSlice"




export const DeletModal = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.contactData)

    const yesDeleteItem = () => {
        dispatch(YESDELETE())
        toast.success("Delete is successfuly!")
    }

    const noDeleteItem = () => {
       dispatch(NODELETE())
    }

  return (
    <>
    <ToastContainer/>

    <div className={styles.overlay}>
        <div className={styles.wrapper}>
        <p className={styles.para}>Are you sure you want to delete?</p>
        <div className={styles.btns}>
           <Button clickHandler={yesDeleteItem } styleBtn={'green'}>{"Yes"}</Button>
           <Button clickHandler={noDeleteItem } styleBtn={'red'}>{"No"}</Button>
        </div>
    </div>
    </div>
    </>
  )
}