import React,{Component} from 'react';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import Header from './components/Header';
import EditUser from './components/EditUser';

import Users from './components/Users';
import {route} from "./Router"
import ShowUsers from './components/ShowUsers';
import Footer from './components/Footer';
import "./App.css";
import "./config/config.json"

export default class App extends Component{

constructor(propes){
super(propes)
this.id=window.localStorage.getItem('hash').split('/')[1];
this.views={
  home:<Home></Home>,
  createuser:<Users></Users>,
  showuser:<ShowUsers/>,
 ["edituser/"+this.id]:<EditUser userId={this.id}/>

  
  
  
  }
}
componentDidMount(){
console.log( "this is app.jsx");

}
renderViews=()=>{
return this.views[route]

}

  render=()=>{

return(

<>

<Header/>


{this.renderViews()}
<Footer/>

</>


)



  }


}