import React  from "react";
import Ccomp from "./Ccomp";
import {name} from './Acomp'
import { useContext } from "react";
export default function Bcomp(){
    const char=useContext(name)
    return(

        <>
        <h1>B {char}</h1>
       {/*<h1>hello {props.name}</h1>
        <Ccomp name={props.name}/>//name props send to Ccomp  this is called as prop drilling,if you are not sending t0 the Ccomp then it will not send the props to the Cco
        */}
        <Ccomp/>
        </>
    );

}