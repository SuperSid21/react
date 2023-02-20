import react, { createContext } from 'react'
import Bcomp from './Bcomp';

const name=createContext();
export default function Acomp(){
    return(
        // <Bcomp name='siddhesh'/>
        <name.Provider value={'siddhesh'}>
            <Bcomp/>
            </name.Provider>
        
    );

}
export {name};  