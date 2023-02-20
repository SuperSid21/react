import react from 'react'
import NoteContext from './components/NoteContext'

const NoteState=(props)=>{
    const state={
        name:"harry"
    }
    return(
<NoteContext.Provider value={state}>
{props.childern } 
</NoteContext.Provider>
)
}

export default NoteState;