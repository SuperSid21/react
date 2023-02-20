import React, {   useContext, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import NoteContext from "./NoteContext";

const regSchema = yup.object().shape({

  user: yup.string().required("enter user name"),

  password: yup.number().required("Incorrect Password"),
});

export default function Login() {
  
 

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  
const[token,setToken]=useState('');
useEffect(() => {
  console.log(token)
}, [token])

  console.log(token)
   
  const subemail = (e) => {
    setEmail(e.target.value);
  };
  const subpass = (e1) => {
    setPass(e1.target.value);
  };

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(regSchema),
  });
  const formSubmitHandler = (data) => {
   
    axios
      .post("http://localhost:5000/log_in", {
        email: email,
        password: pass,
      }).then((response) => {
        //console.log(response.data.token)
        if (response.status === 200) {
          // setToken(response.data.token)
          navigate("/Welcome");
          console.log(response)
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('id',response.data.user_id)
          
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  

  return (
    <>
      <Typography variant="h3" component="h2">
        Log In
      </Typography>
      <div className="container">
        <form style={{ margin: 50 }} onSubmit={handleSubmit(formSubmitHandler)}>
          <div>
            <Stack spacing={2} direction="row">
              <TextField
                {...register("user")}
                label="UserName"
                id="outlined-size-small"
                name="user"
                size="small"
                onChange={(e) => subemail(e)}
              />
              {errors.user ? (
                <p style={{ color: "red" }}>{errors.user.message}</p>
              ) : (
                <></>
              )}
            </Stack>
            <br></br>
          </div>
          <div>
            <Stack spacing={2} direction="vertical">
              <TextField
                {...register("password")}
                label="password"
                id="outlined-size-small"
                type="password"
                name="password"
                size="small"
                onChange={(e) => subpass(e)}
              />

              {errors.password ? (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              ) : (
                <></>
              )}
            </Stack>
            <br></br>

            <Stack spacing={2} direction="row">
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </>
  );
}

