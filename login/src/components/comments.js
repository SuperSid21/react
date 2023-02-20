import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Comments = () => {

const [data,setData]=useState("")
const [count,setCount]=useState(0)
const [post,setPost]=useState([])
const dataSubmit=(e)=>{

setData(e.target.value)
}
const countSubmit=()=>{

    setCount(count+1)
    var a=[...post,{id:count,data:data}]
    setPost(a);
    }
   
    console.log(post)

  return (
    <>
    <form style={{marginTop:'150px'}} >
    <TextField  onChange={(e) => dataSubmit(e)}>

    </TextField>
    <Button onSubmit={countSubmit}>post</Button>
    </form>
    </>
  )
}

export default Comments