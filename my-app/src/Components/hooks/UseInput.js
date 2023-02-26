import {useState} from "react"

export const UseInput = (data) => {

    const [enteredValue,setEnteredValue]=useState('')

    const changeValueHandler=(event)=>{
         setEnteredValue(event.target.value)
        //   console.log(event.target.value);  
        data()
    };
    
    
    return {enteredValue,changeValueHandler,setEnteredValue};
    
};
