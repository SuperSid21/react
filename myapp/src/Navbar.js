import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';


export default function 
Navbar(props) {


  const navigate = useNavigate();
 // const home = () => {
   // navigate('/')
  //}

  //const about = () => {
    //navigate('/about')
  //}

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.dark} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <p onClick={navigate('/')} >Home</p> */}
        <p className="nav-link" onClick={()=>navigate('/')} aria-current="page">Home </p>
      </li>
      <li className="nav-item">
        <p className="nav-link" onClick={()=>navigate('/about')} >{props.aboutText}</p>
       </li>
     
    </ul>
    {/* <form className="form-inline my-2 my-lg-0"> */}
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      
    {/* </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
    </>
  );
  
}
Navbar.propTypes = {title: PropTypes.string.isRequired,
                aboutText: PropTypes.string
  }
  Navbar.defaultProps={
    title:"Set Title here",
    aboutText:"About text here"
  }