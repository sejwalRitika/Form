import { useEffect, useState } from "react";
import validted from "./validted";
const useForm =(submitform)=>{
const[values, setValues]= useState({
fullname:"",
email:"",
password:""
});
const [errors, setErrors]= useState({});
const [dataisCorrect, setDataIsCorrect]= useState(false);
const handleChange = (event) =>{
setValues({
...values,
[event.target.name]:event.target.value
})
}
const handleFormSubmit = (event) =>{
event.preventDefault();
setErrors(validted(values));
setDataIsCorrect(true)
};
useEffect(()=>{
if(Object.keys(errors).length === 0 && dataisCorrect){
submitform(true);
}
});
return {handleChange, handleFormSubmit, errors, values};
}
export default useForm;