import React, { useContext } from 'react'
import noteContext from "../../context/notes/NoteContext"
import Noteitem from './Noteitem'


const Notes = () => {
  const context = useContext(noteContext);
  console.log("mein notes k context", context)
  // const [notes, setNotes] = context;
  const {notes, setNotes} = context;
  return (
    <>
     <div className='row mt-4 mx-4'>
      <h2>You Notes</h2>
      {/* {notes.map((note) => {
        return <Noteitem key={note._id} note={note}/>
      })} */}
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
