import { useState } from 'react';
import NoteContext from './NoteContext';

//create arrow function

const NoteState = (props) => {

  // my db url
  const host = "http://localhost:5000"

  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //Add a Notes
  const addNote = async (title, description, tag) => {
    //TODO: API Call For adding note
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MWQ4ZDQwMTMxNzUwNjI2Y2JkN2I5In0sImlhdCI6MTY5OTg3MTM4OH0.YzzjyX-WuaGiCxuaWS_xnD0rhJCsos435osXmEgCSXQ"
        },
        body: JSON.stringify({ title, description, tag })
      });
  
      if (!response.ok) {
        throw new Error('Failed to add note');
      }
  
      const newNote = await response.json();
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Error adding note:', error.message);
    }
  };
  

  //Get or Fetch Notes
  const getNotes = async () => {
    //API Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {

      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MWQ4ZDQwMTMxNzUwNjI2Y2JkN2I5In0sImlhdCI6MTY5OTg3MTM4OH0.YzzjyX-WuaGiCxuaWS_xnD0rhJCsos435osXmEgCSXQ"
      }

    });

    const json = await response.json()
    setNotes(json)

  }

  //Edit a Notes
  const editNote = async (id, title, description, tag) => {
    //TODO: API Call for edit note
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {

      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MWQ4ZDQwMTMxNzUwNjI2Y2JkN2I5In0sImlhdCI6MTY5OTg3MTM4OH0.YzzjyX-WuaGiCxuaWS_xnD0rhJCsos435osXmEgCSXQ"
      }

    });

    const json = await response.json()

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        
      }
      
    }

  }

  //Delete a Notes
  const deleteNote = (id) => {
    //TODO: API Call for delete note
    const newNote = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNote)
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, getNotes, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;