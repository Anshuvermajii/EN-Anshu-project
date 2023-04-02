import { useState } from "react";

import "./App.css"
import LoginForm from "./Components/LoginForm"
const App=()=>{
    const [values,setValues] = useState({
         
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:""


    });

   const inputs =[

{
id:1,
name:"username",
type:"text",
placeholder:"Username",
errorMessage:"user should be 3 character",
label:"Username",
required:true,
},
{
    id:2,
name:"email",
type:"text",
placeholder:"Email",
errorMessage:"email required",
label:"Email",
required:true,
},
{
    id:3,
name:"birtday",
type:"text",
placeholder:"Birthday",
errorMessage:"birthday reqire",
label:"birthday",
required:true,
},
{
    id:4,
name:"password",
type:"password",
placeholder:"Password",
errorMessage:"max 4 char",
label:"password ",
pattern:"abdh",
required:true,
},
{
    id:5,
name:" confirmPassword",
type:"password",
placeholder:"confirmPassword",
errorMessage:"special required",
label:"confirmPassword ",
pattern:values.password,
required:true,
},


   ]

    //console.log(username)
    const handleSubmit = (e) => {
     e.preventDefault();
    //  const data =new FormData(e.target)
    //  console.log(data);

    
    };
    const onChange= (e)=>{
   setValues({...values,[e.target.name]:e.target.value})


    }
   //console.log(values);

return (
<>
<div className="app">
    <form onSubmit ={handleSubmit}>
        <h1>Register Here</h1>
{inputs .map((input)=>(

<LoginForm  key={input.id} {...input} 
value={values[input.name]}  
onChange={onChange}/>
))}



<button >SUBMIT</button>
</form>
</div>

</>

)


}
export default App;