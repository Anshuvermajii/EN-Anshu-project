import React,{Component} from 'react';

export default class Home extends Component{


  render=()=>{

return(

<>

<div className='container mt-5' style={im}>
<div  className="container-fluid p-5  text-white text-center">
  <h1 style={{color:"red"}}>My First CRUD PAGE</h1>
  <p style={{color:"red"}}>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>

</div>
</>


)



  }


}
const im={
  backgroundImage:"url('./images/1.jfif')",
  color:"red",
  backgroundRepeat:"round",
  //background:"rgba(0,0,0,.9)"
  
  
  }
  
