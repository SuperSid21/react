import react,{useState,useEffect,useRef} from 'react'

export default function Useref(){
    const[myData,setMyData]=useState("")

    const count=useRef(0)
    useEffect(()=>{
        count.current=count.current+1
    })
    return(<>
    <input type="text" value={myData} onChange={(e)=>setMyData(e.target.value)}  />
    <p>the number of times render:{count.current}</p>
    </>)
}