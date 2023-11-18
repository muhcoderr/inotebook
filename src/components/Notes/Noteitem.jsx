import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className='col-md-3'>
      <div className='my-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <div className='flex'>
        <Card.Title>{note.title}</Card.Title>
        <i className="fa-solid fa-pen-to-square mx-2" style={{cursor: 'pointer', color: "#0d6efd"}} />
        <i className="fa-solid fa-delete-left mx-2" style={{cursor: 'pointer', color: "#0d6efd"}} />
        </div>
        <Card.Text>
         {note.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      </div>
    </div>
   
  )
}

export default Noteitem
