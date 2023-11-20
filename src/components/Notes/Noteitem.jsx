import React , {useContext} from 'react'
import Card from 'react-bootstrap/Card';
import noteContext from "../../context/notes/NoteContext"

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { note } = props;
  const { deleteNote } = context;  
  return (
    <div className='col-md-3'>
      <div className='my-3'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <div className='d-flex justify-content-around'>
              <Card.Title>{note.title}</Card.Title>
              <div className='d-flex justify-content-end'>
                <i className="fa-solid fa-pen-to-square mx-2" style={{ cursor: 'pointer', color: "#0d6efd" }} />
                <i className="fa-solid fa-delete-left mx-2" onClick={()=>{deleteNote(note._id)}} style={{ cursor: 'pointer', color: "#0d6efd" }} />
              </div>
            </div>
            <Card.Text>
              {note.description}
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </div>

  )
}

export default Noteitem
