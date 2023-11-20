import React, { useContext, useEffect } from 'react'
import noteContext from "../../context/notes/NoteContext"
import Noteitem from './Noteitem'
import AddNote from './AddNote'

const Notes = () => {
  const context = useContext(noteContext);
  const {notes, getNotes} = context;
  useEffect(()=>{
    getNotes()
    console.log(getNotes)
  },[])

  return (
    <>
    <AddNote/>
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
