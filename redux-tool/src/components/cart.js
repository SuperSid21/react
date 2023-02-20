import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const user1=useSelector((state)=>state.reducer.usercart.value)
  return (
    <div>
        <h1>Cart {user1}</h1>
    </div>
  )
}

export default Cart