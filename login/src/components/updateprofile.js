import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";


export default function Updateprofile(){
    let id=localStorage.getItem('id');
    const[name,setName]=useState('')
    const update=(e)=>{
        setName(e.target.value )
    }
    let token=localStorage.getItem('token')
    const submit=()=>{
        axios.put(`http://localhost:5000/update_name/${id}`,{updated_name:name},{headers:{"Authorization" : `Bearer ${token}`},})
        
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

   
    return(<>
    <Typography>
        
    </Typography>


        <form style={{marginTop:'100px'}} >     
        <Stack spacing={2} direction="row">
              <TextField 
                label="UserName"
                id="outlined-size-small"
                name="user"
                size="small"
                onChange={(e) => update(e)}>

        </TextField>

    </Stack>
    <Button onSubmit={submit()}>Update</Button>

    </form>
 
    </>);
}