import react ,{useState} from 'react'
import Child from './Child'

export default function Parent(){
    const [count,setCount]=useState(0)
   const Submit=()=>{
    setCount(count+1)
    console.log(count)
   }
    return(
        <>
        <button onClick={Submit}>Click me</button>
        <Child/>
        </>
    )
}
