import * as yup from "yup";

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

 export const UserSchema = yup.object().shape({
    name: yup.string().min(2).required() ,
    lastName:yup.string().min(2).required() ,
    // phoneNum:yup.number().matches(phoneRegExp, 'Phone number is not valid') ,
    mobile: yup.number().max(11).required(),
    email: yup.string().email().required(),
   
  });