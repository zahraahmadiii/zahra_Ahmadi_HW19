import React from 'react'
import styles from './style.module.css'

const Input = ({type,placeholder,title,style,disabled}) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} value={title} style={style} disabled={disabled}/>
  )
}

export default Input