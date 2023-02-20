import React from 'react'
import {BsTrash} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import styles from './style.module.css'
const Modal= () => {
  return (
    <div className={styles.modal}>
        <span className={styles.row1}>
          <div>
            <BsTrash className={styles.icons}/>
            <FaRegEdit className={styles.icons}/>
          </div>
           
            <h3>زهرااحمدی</h3>
            
        </span>
        <div>
            <p>اعضای خانواده</p>
            <p>ایمیل</p>
         </div>
         
    </div>
  )
}

export default Modal