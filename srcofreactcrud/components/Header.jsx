import React,{Component} from 'react';
export default class Header extends Component{


  render=()=>{

return(

<>


<nav className="navbar navbar-expand-sm bg-dark container">

  <div className="container-fluid">
   
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link text-white fs-5 ps-5" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white fs-5 ps-5" href="#createuser">CreateUser</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white fs-5 ps-5" href="#showuser">ShowUser</a>
      </li>
    </ul>
    <form className='d-flex'>
   <input className='form-control me-2 w-100' type="text" placeholder='SEARCH...' />
   <button className='btn btn-primary'>SEARCH</button>


    </form>

  </div>

</nav>

</>


)



  }


}