import {useState} from "react"

export const UseInput = () => {
 
    const [enteredValue,setEnteredValue]=useState("")

    const changeValueHandler=(event)=>{
        setEnteredValue(event.target.value)
    
    }
    return {enteredValue,changeValueHandler}
    
}
