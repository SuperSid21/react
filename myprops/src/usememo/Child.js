import react, { memo ,useState} from 'react'

 function Child(){
    const [count,setCount]=useState(0)
    const Submit=()=>{
     setCount(count+1)
     console.log(count)
    }
    console.log("child")
    return(
        <button onClick={Submit}>Child</button>
        
    )
}
export default memo(Child)