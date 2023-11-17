import react from 'react';
import noteContext from './NoteContext';

//create arrow function

const NoteState = (props)=>{
   
    return(
        <noteContext.provider value={{}}>
            {props.children}
        </noteContext.provider>
    )
}

export default NoteState;