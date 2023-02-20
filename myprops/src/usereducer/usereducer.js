import react, { useReducer } from 'react'

const initialstate=0;
const reducer=(state,action)=>{
    console.log(state,action)
    if(action.type==='increment'){
        return state+1;
    }
    if(action.type==='decrementt'){
        return state-1;
    }
}

export default function Userreducer(){

    const[state,dispatch]=useReducer(reducer,initialstate)
    return(
<div>
    <button onClick={()=> dispatch({type:'increment'})}>INC</button>
    <button onClick={()=> dispatch({type:'decrementt'})}>DEC</button>
</div>
    );
}
