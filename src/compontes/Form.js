import React, { useState } from "react";
import Signupform from "./Signupform";
import SignupFormsucces from "./SigupFormsucces";
const Form = () =>{
const [formIsSubmitted, setFormIsSubmitted]= useState(false);
const submitform = () =>{
setFormIsSubmitted(true);
}
return(
<div>
{!formIsSubmitted ?<Signupform submitform={submitform}/> : <SignupFormsucces/>}
</div>
)
}
export default Form;