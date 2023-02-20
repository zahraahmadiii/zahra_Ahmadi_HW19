import React from 'react'
import ManageContact from '../Contacts-Managment'
import Modal from '../Contacts-Modal'
import styles from './style.module.css'

const NoteBook = () => {
  return (
    <div className={styles.container}>
        <ManageContact/>
        <Modal/>
    </div>
  )
}

export default NoteBook