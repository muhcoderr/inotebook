import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import noteContext from "../../context/notes/NoteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    
    const [note, setNote] = useState({
        title:"",
        description:"",
        tag:""
    })

    const handleClick = (e)=> {
        e.preventDefault(); //when i'll add note page is not reloaded
        addNote(note.title, note.description, note.tag)
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div className='container my-3'>
            <h3>Add Note</h3>
            <Form className="mb-3">

                <FloatingLabel className="mb-3" label="title">

                    <Form.Control type="text" placeholder="Enter title" id="title" name="title" onChange={onChange}/>

                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Description">
                    <Form.Control
                        as="textarea"
                        placeholder="Enter description"
                        style={{ height: '100px' }}
                        id="description"
                        name="description"
                        onChange={onChange}
                    />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Tags">

                    <Form.Control type="text" placeholder="Enter relevant tags" id="tags" name="tags" onChange={onChange}/>
                </FloatingLabel>

                <Button type='submit' variant="primary" onClick={handleClick}>Add Note</Button>

            </Form>

        </div>
    )
}

export default AddNote
