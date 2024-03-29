import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDeatils = () => {

const {empid}=useParams();
const [empdata,empdatachange]=useState({});

useEffect(()=>{

    fetch("http://localhost:5000/employee/"+empid).then((res)=>{

        return res.json();
        
        }).then((data)=>{
       empdatachange(data)

        }).catch((error)=>{
        console.log(error)
        

        })
        


},[]);

    return ( 

        <>
        
            {empdata &&
                <div>
          
  <h1>THE EMPLOYE ID IS:{empdata.name}<br/> ({empdata.id})</h1>
<h2>Contact deatils</h2>
<h5>email is :{empdata.email}</h5>
<h5>phone is :{empdata.mobile}</h5>
<Link as={Link}  to="/" className="btn btn-warning ms-3">BACK TO</Link>

</div>
            }


       
        </>
     );
}
 
export default EmpDeatils;