import React from 'react'
import styles from './style.module.css'

const Button = ({children, styleBtn, clickHandler}) => {
  return (
    <button className={styles.btn} onClick={clickHandler} style={{backgroundColor:styleBtn, color:'white'}}>{children}</button>
  )
}

export default Button;