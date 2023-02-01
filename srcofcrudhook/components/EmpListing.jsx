import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {


    const [empdata,empdatachange]=useState(null);
const navigate=useNavigate();

const LoadDetails=(id)=>{
    navigate("/empdetails/"+id)
  
    
}//SHOW D
const LoadEdit=(id)=>{

    navigate("/empedit/"+id)
}
const  RemoveFunction=(id)=>{
if(window.confirm("ARE YOU SURE YO WANT TO DELETE ?")){


    let promise=fetch("http://localhost:5000/employee/"+id,{
        method:"DELETE"
    
    
    
    
    });
    promise.then((res)=>{
        if(res.ok){
    alert("Delete successfully");
window.location.reload();

        }
    
    }).then((data)=>{
    console.log(data)
    
    }).catch((err)=>{
    console.log(err)
    
    
    })
}
    
}








useEffect(()=>{
fetch("http://localhost:5000/employee/").then((res)=>{
return res.json();

}).then((data)=>{

   console.log(empdatachange(data))
}).catch((error)=>{
console.log(error)

})
},[]);//update stage

    return (  
<>
<div className="container">

<div className="card-title">

    <h2>Employee Listing </h2>
</div>
<div className="card-body">
    <Link as={Link} to ='/empcreate'  className="btn btn-outline-success">Add New (+)</Link>

    <table className="table table-bordered" >
<thead className="bg-dark text-white">
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Action</td>
    </tr>



</thead>
<tbody>

{ empdata &&
empdata.map(item=>{
    
return <tr key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.mobile}</td>
<td><button onClick={()=>{LoadEdit(item.id)}}  className="btn btn-outline-success ms-2" >Edit</button>
<button onClick={()=>{RemoveFunction(item.id)}}  className="btn btn-outline-danger ms-2" >Remove</button>
<button onClick={()=>{LoadDetails(item.id)}} className="btn btn-outline-primary ms-2" >Deatils</button></td>


 
</tr>

})

}
    
</tbody>


    </table>
</div>

</div>
</>


    );
}
 
export default EmpListing;