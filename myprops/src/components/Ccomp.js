import React,{useContext} from "react";
import {name} from './Acomp'
export default function Ccomp(props){
    const na=useContext(name)
   console.log(na)
   return(<>
    <h1>C {na }</h1>
    </>)
}