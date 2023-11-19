import React from 'react';
import Notes from '../Notes/Notes';
import AddNote from '../Notes/AddNote';
import Alret from '../Alert/Alret';
const Home = () => {
  return (
    <div>
        {/* <Alret/> */}
        <AddNote/>
        <Notes/>
    </div>
  )
}

export default Home
