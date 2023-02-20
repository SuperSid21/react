import { Button } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Profile () {
  const Navigate = useNavigate();
 const [email,setEmail]=useState([])

 let token=localStorage.getItem('token')
 let id=localStorage.getItem('id')
 //let id=5;
 console.log(id)
 console.log(token)
 useEffect(() => {
   
 axios.get(`http://localhost:5000/profile/${id}`,{headers:{"Authorization" : `Bearer ${token}`}})
 .then(res=>{
   console.log(res)
   setEmail(res.data [0])
 })
 .catch((error) => {
  console.log(error);
});


 }, [])
 

  return (
    <>
    <h1 style={{ marginTop: "100px" }}>hello {email.name}</h1>
    <Button onClick={()=>Navigate('/updateprofile')}>Update Profile</Button>
    
    </>
  )
}
