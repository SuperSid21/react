import React from 'react'
// import { useSelector } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
  
  const Navbar = () => {
   const amount=useSelector(state=>state.amount)
   const quantity=useSelector(state=>state.quantity)

   return (
    
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">State Bank of Texple</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        
    
      </ul>
    <div>
        <button disabled={true} className="btn btn-primary mx-4">Your Balance {amount}</button>
    </div>
    <div>
        <button disabled={true} className="btn btn-primary">Cart {quantity}</button>
    </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
  
  export default Navbar