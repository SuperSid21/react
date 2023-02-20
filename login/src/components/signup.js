import React,{useState} from 'react'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import { Stack } from '@mui/system'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const regSchema=yup.object().shape({
   name:yup.string().required("enter name"),
  email:yup.string().email("plz provide valide Email").required("email is required"),
  mobile:yup.string().required('plz provide valide mobile No'),
})
const Signup = (props) => {
  const navigate = useNavigate();
  const[name,setName]=useState('')
  const[email,setEmail]=useState('');
  const[pass,setPass]=useState('');
  
  const subname=(e)=>{
    setName(e.target.value)
}
  const subemail=(e)=>{
      setEmail(e.target.value)
  }
  const subpass=(e1)=>{
      setPass(e1.target.value)
  }

  const{register,handleSubmit,formState:{errors},}=useForm({
    resolver:yupResolver(regSchema)
  })
  
    const formSubmitHandler=(data)=>{
        
      axios.post('http://localhost:5000/register',{
      email:email,
      password:pass ,
      name:name
     })
     .then( (response) =>{
     
      if(response.status === 200){
          navigate('/login')
      }
    
    })
    .catch( (error)=> {
      console.log(error);
    });
     }
    
   
  return (
    <>
  
    <div className='container my-8 mx-3'>
    <Stack spacing={2} direction="row">
    <Typography variant="h3" component="h2">
  Sign Up
</Typography>
    </Stack>
      <form style={{margin:50}} onSubmit={handleSubmit(formSubmitHandler)}> 
      
      <div>
       <Stack spacing={2} direction="row"  >
         <TextField {...register("name")}
          label="name"
          id="outlined-size-small"
          name="name"
          size="small"
          onChange={(e) => subname(e)}
        />
        {errors.name?(<p style={{color:'red'}}>{errors.name.message}</p>):(<></>)}
        </Stack> 
       <br></br>
        </div>
        <div>
      <Stack spacing={2} direction="row">
        <TextField {...register("email")}
          label="Email"
          id="outlined-size-small"
          name="email"
          size="small"
          onChange={(e) => subemail(e)}
        />
        
        {errors.email?(<p style={{color:'red'}}>{errors.email.message}</p>):(<></>)}
        </Stack>
        <br></br>
       
      <Stack spacing={2} direction="row">
        <TextField {...register("mobile")}
          label="Mobile No"
          id="outlined-size-small"
          name="mobile"
          size="small"
          onChange={(e) => subpass(e)}
        />
        {errors.mobile?(<p style={{color:'red'}}>{errors.mobile.message}</p>):(<></>)}
        </Stack>
        <br></br>
        <Stack spacing={2} direction="row">
        <Button type="submit"  variant="contained">Submit</Button>
        </Stack>
       
        </div>
      
       
   

    </form>
    </div>

















    </>
  )
}

export default Signup