import { useState } from "react";
import "./styles/loginForm.css"


const LoginForm=(props)=>{

    const [focused,setFocused]=useState(false);


    const {label ,errorMessage, onChange ,id,...inputProps}=props;

const handleFocus = (e)=>{

setFocused(true);

}


return(
<>
<div className="formInput">



 {/* <input  name={props.names}
 
placeholder={props.placeholder} /> */}
<label>{label}</label>
<input {...inputProps} onChange={onChange} onBlur={handleFocus} 
focused={focused.toString()}
onFocuse={inputProps.name === "confirmPassword" && setFocused(true) }
/>
<span>{errorMessage}</span>
</div>


</>


)
//<input placeholder={props.placeholder} onChange={e=>props.setUsername(e.target.value)}/>//higher order


}

export default LoginForm