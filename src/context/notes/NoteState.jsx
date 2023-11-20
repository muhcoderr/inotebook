import { useState } from 'react';
import NoteContext from './NoteContext';

//create arrow function

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "6552109d4f5a45f3523a1369",
      "user": "6551d8d40131750626cbd7b9",
      "title": "Add and Fetch Notes",
      "description": "Adding Notes and Fetch the data",
      "tags": "General",
      "date": "1699877021958",
      "__v": 0
    },
    {
      "_id": "655210aa4f5a45f3523a136c",
      "user": "6551d8d40131750626cbd7b9",
      "title": "Add and Fetch Notes",
      "description": "Adding Notes and Fetch the data",
      "tags": "General",
      "date": "1699877034673",
      "__v": 0
    },
    {
      "_id": "6554ecfb5fb0a616326a04d2",
      "user": "6551d8d40131750626cbd7b9",
      "title": "Add and Fetch Notes",
      "description": "Adding Notes and Fetch the data",
      "tags": "General",
      "date": "1700064507914",
      "__v": 0
    },
    {
      "_id": "6554ecfb5fb0a616326a04d2",
      "user": "6551d8d40131750626cbd7b9",
      "title": "Add and Fetch Notes",
      "description": "Adding Notes and Fetch the data",
      "tags": "General",
      "date": "1700064507914",
      "__v": 0
    },
    {
      "_id": "6554ecfb5fb0a616326a04d2",
      "user": "6551d8d40131750626cbd7b9",
      "title": "Add and Fetch Notes",
      "description": "Adding Notes and Fetch the data",
      "tags": "General",
      "date": "1700064507914",
      "__v": 0
    },
  ]

  const [notes, setNotes] = useState(notesInitial)

  //Add a Notes
  const addNote = (title, description, tag) => {
    //TODO: API Call For adding note

    const note = {
      "_id": "6552109d4f5a45f3523a136911",
      "user": "6551d8d40131750626cbd7b911",
      "title": "Muhammad Bin Tariq",
      "description": "Adding Notes and Fetch the data",
      "tags": "General",
      "date": "1699877021958",
      "__v": 0
    };

    setNotes(notes.concat(note))

  }

  //Edit a Notes
  const editNote = (id, title, descrition) => {
    //TODO: API Call for edit note

  }

  //Delete a Notes
  const deleteNote = (id) => {
    //TODO: API Call for delete note
    const newNote = notes.filter((note)=>{
      return note._id!==id})
    setNotes(newNote)
  }

  
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;