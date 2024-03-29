import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EmpCreate = () => {



const[id,idchange]=useState('');
const[name,namechange]=useState('');
const[email,emailchange]=useState('');
const[mobile,mobilechange]=useState('');
const[active,activechange]=useState(true);
const[validation,valchange]=useState(false);
const navigate=useNavigate();
const handlesubmit=(e)=>{

e.preventDefault();
const empdata={id,name,email,mobile,active};


let promise=fetch("http://localhost:5000/employee",{
    method:"POST",
headers:{
    
    "Content-Type":"application/json"
},
body:JSON.stringify(empdata)



});
promise.then((res)=>{
    if(res.ok){
alert("saved successfully");
navigate('/');
    }

}).then((data)=>{
console.log(data)

}).catch((err)=>{
console.log(err)


})
}

    return ( 

        <>
        <div className="row">
     <div className="offset-lg-3 col-lg-4">
<form className="container" onSubmit={handlesubmit}>
<div className="card">

    <div className=" card-title ">
<h2 className="text-center">Employee Create</h2>

    </div>
    <div className="card-body">

<div className="row">

<div className="col-lg-12">
<div className="form-group">
<lable>ID</lable>
<input value={id} disabled="disabled" className="form-control"></input>

</div>

</div>

<div className="col-lg-12">
<div className="form-group">
<lable>Name</lable>
<input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>{namechange(e.target.value)}} className="form-control"></input>
{name.length==0 && validation && <span className="text-danger">enter the name</span>}

</div>

</div>

<div className="col-lg-12">
<div className="form-group">
<lable>Email</lable>
<input value={email} onChange={e=>{emailchange(e.target.value)}} className="form-control"></input>

</div>

</div>

<div className="col-lg-12">
<div className="form-group">
<lable>Phone</lable>
<input value={mobile} onChange={e=>{mobilechange(e.target.value)}} className="form-control"></input>

</div>

</div>

<div className="col-lg-12">
<div className="form-check">

<input  value={active} onChange={e=>{activechange(e.target.value)}} type="checkbox" className="form-check-input"></input>
<lable className='form-check-lable'>Is Active</lable>
</div>

</div>
<div className="col-lg-12">
<div className="form-group">
<button type="submit" className="btn btn-success">SAVE</button>
<Link as={Link}  to="/" className="btn btn-warning ms-3">BACK</Link>

    </div>
</div>
</div>

    </div>
</div>


</form>


     </div>



        </div>

        
        </>
     );
}
 
export default EmpCreate;