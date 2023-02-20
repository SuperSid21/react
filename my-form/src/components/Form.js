import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema=yup.object().shape({
  email:yup.string().email('please provide valid email').required('email address is required'),
  password:yup.string().min(4,'please provide valid password').required('password is required'),
  confirmpassword:yup
  .string("password should be a string")
  .oneOf([yup.ref("password")])
  .required("confirm password is required"),
})

export default function Form(){
  const {register,handleSubmit,formState:{errors},}=useForm({
      resolver:yupResolver(registerSchema)
    });

  
    const formSubmitHandler=(data)=>{
      console.log(data)
    }

    if(errors.confirmpassword){
      console.log(errors.confirmpassword.message)
    }

      return(
        <>

        <form onSubmit={handleSubmit(formSubmitHandler)}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label><br/>
    <input {...register("email")} type="email" name="email" className="form-form-group col-md-6" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/><br/><br/>
    {errors.email ? (
            <span className="text-red-900">{errors.email.message}</span>
          ) : (
            <></>
          )}
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label><br/>
    <input {...register("password")} type="password" name="password" className="form-form-group col-md-6" id="exampleInputPassword1" placeholder="Password"/>
    {errors.password ? (
            <span className="text-red-900">{errors.password.message}</span>
          ) : (
            <></>
          )}
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirm Password</label><br/><br/>
    <input {...register("confirmpassword")} type="password" name="confirmpassword" className="form-form-group col-md-6" id="exampleInputPassword2" placeholder="Password"/>
    {errors.confirmpassword ? (
            <span className="text-red-900">{errors.confirmpassword.message}</span>
          ) : (
            <></>
          )}
 </div><br/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </>

    );


}