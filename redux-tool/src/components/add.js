import React from 'react'
import { useDispatch } from 'react-redux'
import {add,remove} from '../features/usercart'

const Add = () => {
    const dispatch=useDispatch();
  return (
    <div>

        <button onClick={()=>{dispatch(remove(1))}}>-</button>
        Add to Cart
        <button onClick={()=>{dispatch(add(1))}}>+</button>
        
    </div>
  )
}

export default Add