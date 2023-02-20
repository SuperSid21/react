import React ,{useState,useEffect} from 'react';
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";


const registerSchema=yup.object().shape({
    name:yup.string().required('name is required'),
    job:yup.string().required('job is required'),
  
})
export default function Crud(){
    const[hike,setHike]=useState(0);
    const [data, setData] = useState();
    const {register,handleSubmit,formState:{errors},}=useForm({
        resolver:yupResolver(registerSchema)
      });

      useEffect(() => {
        axios
        .get("https://reqres.in/api/users")
        .then((res) => {
            console.log(res.data.data)
            setData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
        deleteHandler();
        formSubmitHandler();
      }, []);
      
        const formSubmitHandler=(formData)=>{
            axios.post("https://reqres.in/api/users",{formData})
             .then((res)=> {
                console.log(res)
             })
             .catch((err) => {
               console.log(err);
           })
          }
          
        
    
     
  
      // if(errors.confirmpassword){
      //   console.log(errors.confirmpassword.message)
      // }
      //insert
    //   axios
    //   .post("https://reqres.in/api/users")
    //   .then((res)=>{

    //   }
      
      //show
      

      //delete
      
  const deleteHandler = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then((res) => {
        // getUsers();
    console.log(res);
    })
    .catch((err) => {
    console.log(err);
    })
  }
  //console.log(register)
  /*const Data =  [ 
        { 
            name: "Angelina Jolie", 
           age: 30, currentSalary:12000, prevSalary:8000, Exp:2 
        }, 
        { 
            name: "Eric Jones", 
            age: 12, currentSalary:19000, prevSalary:9500, Exp:5 
        }, 
        { 
            name: "Paris Hilton", 
            age: 15, currentSalary:22000, prevSalary:18000, Exp:1 
        }, 
        { 
            name: "Kayne West", 
            age: 16, currentSalary:70000, prevSalary:30000, Exp:7 
        }, 
        { 
            name: "Bob Ziroll", 
            age: 18, currentSalary:26000, prevSalary:14000, Exp:5 
        } 
    ]       
   Data.forEach((e)=>{
    if(e.age>18 && setHike(((e.currentSalary-e.prevSalary)/e.prevSalary)*100))
    
    
    console.log(e)
   })
   */
        return(
          <>
  
          <form onSubmit={handleSubmit(formSubmitHandler)}>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label><br/>
      <input {...register("name")} type="text" name="name" className="form-form-group col-md-6" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/><br/><br/>
      {errors.email ? (
              <span className="text-red-900">{errors.name.message}</span>
            ) : (
              <></>
            )}
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">job</label><br/>
      <input {...register("job")} type="text" name="job" className="form-form-group col-md-6" id="exampleInputPassword1" placeholder="job"/>
      {errors.job ? (
              <span className="text-red-900">{errors.job.message}</span>
            ) : (
              <></>
            )}
    </div>
    <br/>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

<div>
{data &&
        data.map((e) => {
          return (
            <div style={{border:"1px solid red", width:"500px", margin:"20px"}} >
              <h1>{e.id}</h1>
              <h1>{e.email}</h1>
              <h1>{e.first_name}</h1>
              <h1>{e.last_name}</h1>
              <img src={e.avatar} style={{width:"120px"}} />
              <br />
              <button onClick={() => deleteHandler(e.id)} >delete</button>
            </div>
          );
        })}
</div>
  
          </>
  
      );
  
  
  }


