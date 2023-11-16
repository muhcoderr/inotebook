import react from 'react';
import noteContext from './NoteContext';

//create arrow function

const NoteState = (props)=>{
    const state = {
        "name": "Muhammad",
        "class": "BSCS-B"
    }
    return(
        <noteContext.provider value={state}>
            {props.children}
        </noteContext.provider>
    )
}

export default NoteState;