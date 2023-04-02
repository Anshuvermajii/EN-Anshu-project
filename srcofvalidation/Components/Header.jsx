import React,{Component} from 'react';

export default class Header extends Component{

render =()=>{
return(

    <>
    <h1>this is Header</h1>
    <nav className="navbar navbar-expand-sm bg-dark ">

  <div className="container-fluid">
  
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link text-white fs-4 ms-5" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white fs-4 ms-5" href="users">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white fs-4 ms-5" href="showuser">AboutDetails</a>
      </li>
    </ul>
    <form className='d-flex'>
        <input type="text" className='form-control me-2' placeholder='SEARCH..'/>
        <button className="btn btn-primary" type="button"> SUBMIT</button>


        
    </form>
  </div>
  </nav>
    
    </>
)

}


}
