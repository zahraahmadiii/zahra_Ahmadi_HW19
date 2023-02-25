import React from 'react'
import styles from './style.module.css'

const Input = ({type,placeholder,title,disabled,changeValue,topic,clicked,BtnStyle}) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} value={title}  disabled={disabled} onChange={changeValue} name={topic} onClick={clicked} style={BtnStyle} />
  )
}

export default Input