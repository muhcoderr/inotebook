import React, { useContext } from 'react'
import noteContext from "../../context/notes/NoteContext"
import Noteitem from './Noteitem'
import AddNote from './AddNote'

const Notes = () => {
  const context = useContext(noteContext);
  const {notes, addNote} = context;
  return (
    <>
     <div className='row mt-4 mx-4'>
      <h2>You Notes</h2>
    
      {Array.isArray(notes) ? (
        notes.map((note) => (
          <Noteitem key={note._id} note={note} />
        ))
      ) : (
        <p>No notes available</p>
      )}
    </div>
    </>
  )
}

export default Notes
