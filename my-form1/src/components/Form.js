import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
  import { yupResolver } from "@hookform/resolvers/yup";

const regSchema=yup.object().shape({
    name:yup.string().required("enter name"),
    email:yup.string().email("plz provide valide email").required("email is requires"),
    pass:yup.string().min(4,"plz provide valide password").required("password is required"),
    cpass:yup.string().oneOf([yup.ref("pass")]  ).required("confirm password is required"),
    age:yup.number().positive().integer().max(100).min(18).required('Age is required'),
    
        })
export default function Form(){
    const {register,handleSubmit,formState:{errors},}=useForm({
        resolver:yupResolver(regSchema)
    });

    const formSubmitHandler=(data)=>{
        console.log(data)
    }
    return(


        <>
        <form onSubmit={handleSubmit(formSubmitHandler)} className="container my-3"> <br/>
        <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input {...register("name")} type="text" className="form-control" name="name" id="inputPassword5" placeholder="Enter your Name"/><br/>
        {errors.name?(<p style={{color:'red'}}>{errors.name.message}</p>):(<></>)}
    </div>
  </div>
        <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input {...register("email")} type="email" className="form-control" name="email" id="inputPassword3" placeholder="Enter your Email"/><br/>
        {errors.email?(<p style={{color:'red'}}>{errors.email.message}</p>):(<></>)}
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Age</label>
    <div className="col-sm-10">
      <input {...register("age")} type="number" className="form-control" name="age" id="inputPassword4" placeholder="Enter your Age"/><br/>
        {errors.age?(<p style={{color:'red'}}>{errors.age.message}</p>):(<></>)}
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input {...register("pass")} type="password" className="form-control" name="pass" id="inputPassword" placeholder="Enter yourPassword"/><br/>
      {errors.pass?(<p style={{color:'red'}}>{errors.pass.message}</p>):(<></>)}
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">ConfirmPassword</label>
    <div className="col-sm-10">
      <input {...register("cpass")} type="password" className="form-control" name="cpass" id="inputPassword1" placeholder="Enter your Confirm Password"/>
      {errors.cpass?(<p style={{color:'red'}}>{errors.cpass.message}</p>):(<></>)}
    </div>
    
  
  </div>
  <br/>
  <button type="submit" className="btn btn-primary ">Submit</button>
  
</form>
        
        </>
    )

}