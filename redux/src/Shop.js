import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {acctionCreators, actionCreator} from './state/index'
const Shop = () => {
  const dispatch=useDispatch();
  const{withdrawMoney,depositMoney}=bindActionCreators(actionCreator,dispatch)
  const{addShoe,removeShoe}=bindActionCreators(actionCreator,dispatch)
  return (
    <>
    <div className='container'>
    <h2>Deposite/Withdraw Money</h2>
       
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(1)}}>-</button>

        Update Balance
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(1)}}>+</button>
    </div>
    <div className='container'>
    <h2>Adidas Shoe</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{removeShoe(1)}}>-</button>

        Add to cart
        <button className="btn btn-primary mx-2" onClick={()=>{addShoe(1)}}>+</button>
    </div>
    </>
  )
}

export default Shop