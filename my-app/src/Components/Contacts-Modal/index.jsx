import React from 'react'
import {BsTrash} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import styles from './style.module.css'
import { useDispatch} from 'react-redux';
import { EDITICON , DELETMODAL } from "../../Redux/Feature/contactSlice"
const Modal= ({item}) => {
 console.log(item)
  const dispatch = useDispatch()
    
  const editHandler = (id) => {
      dispatch(EDITICON(id)) 
  }

  const deletHandler = (id) => {
      dispatch(DELETMODAL(id))
  }

  return (
    
    <div className={styles.modal}>
      
        {/* <span className={styles.row1}> */}
          
          <div>
            <BsTrash className={styles.icons}onClick={()=>deletHandler(item.id)}/>
            <FaRegEdit className={styles.icons} onClick={()=>editHandler(item.id)}/>
          </div>
{/*   
        </span> */}
        {item ?
        <div>
           <h3>{item.name + item.lastName}</h3>
            <p>{item.relation}</p>
            <p>{item.email}</p>
         </div>: ""
         }
         
    </div>
  )
}

export default Modal