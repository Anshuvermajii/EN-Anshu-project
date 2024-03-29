import React,{Component} from "react";
import { route,redirect } from "../Router";

export default class Users extends Component{

   //lifecycle : mounting state

   constructor(props){
      super(props);
      this.state = {
            name:"",
            email:"",
            mobile:"",
            password:"",
            users:[],
            msg:"",
        }
   }

    render = () =>{
        return (
            <div>
              <h1 style={{textAlign:"center"}}>User Register Here</h1>
              <hr/>
              {this.state.msg}
              <form className="container bg-dark text-white form-control">
                    <p>Name : <input type="text" 
                    value={this.state.name} 
                    onChange= { (event)=> 
                    {this.setState({name:event.target.value})}  
                    
                    }   />
                    
                    </p>
                    <p>Email : <input type="email" value={this.state.email} 
                    onChange= {(event)=>{this.setState({email:event.target.value})}}/></p>
                    <p> Mobile : <input type="mobile" value={this.state.mobile} 
                    onChange= {(event)=>{this.setState({mobile:event.target.value})}}/></p>
                    <p>Password : <input type="password" value={this.state.password} 
                    onChange= {(event)=>{this.setState({password:event.target.value})}}/></p>
                    <input type="button" value="save" 
                    onClick={this.saveData}/> 
              </form>
            </div>
        )
    }

  saveData = () =>{
    // console.clear();   // 
    // console.log();
    const url = 'http://localhost:5000/users/';
    //const site_url = 'https://myhisab.seeksolution.in/api/createuser.php/';

    let promise = fetch(url,{
        headers:{
            "Content-Type":"application/json",
        },
        method:"POST",
        body:JSON.stringify(this.state),
    });
    promise.then((response)=>{
        
        if(response.ok){

            this.setState({
                name:"",
                email:"",
                mobile:"",
                password:"",
                msg:<span className="success">User created Successfully</span>
            });

                // let ID1 = setTimeout(()=>{
                //     this.setState({
                //         msg:"",
                //     });
                // },5000);

                return redirect('showuser');
                
        }


    }).then((data)=>{
        console.log(data)

    }).catch((error)=>{
        console.log(error);
        
        this.setState({
            msg:<span className="error">OOps Try Again Later</span>
        });

            let ID1 = setTimeout(()=>{
                this.setState({
               msg:"",
                });
            },5000);
    });
  }
}