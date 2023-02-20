import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';



export default function Navbar() {
 
    const navigate = useNavigate();
   // const [state, setState] = useState(false);
  


  return (
    <React.Fragment>

        <AppBar sx={{background:'#063970'}}>
            <Toolbar>
            <Typography onClick={()=>navigate('/')}>
                Texple
            </Typography>
           
              
            
              <Button onClick={()=>navigate('/Login')}sx={{background:'red',color:'white',marginLeft:2}} varient="contained">Log out</Button>
              
            
              <Button onClick={()=>navigate('/Signup')} sx={{background:'orange',color:'white',marginLeft:'auto'}} varient="contained">Sign Up</Button>
              <Button onClick={()=>navigate('/Login')}sx={{background:'red',color:'white',marginLeft:2}} varient="contained">Log In</Button>
              
              <Button onClick={()=>navigate('/Profile')}sx={{background:'red',color:'white',marginLeft:2}} varient="contained">Profile</Button>
              
              
           
            
            
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

