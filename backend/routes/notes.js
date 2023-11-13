const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser'); //for users
const Note = require('../models/Note');     //for note
const { body, validationResult } = require("express-validator"); //data validation using express validator

// Route # 1:- Get All the Notes: using GET "/api/notes/fetchallnotes".Login required

router.get('/fetchallnotes', fetchuser, async (req, res)=>{
   try {
    const notes = await Note.find({user: req.user.id});
    res.json(notes)
   } catch (error) {
    res.status(500).send("Internal Server Error");
   }
})

// Route # 2:- Add a New Notes : GET "/api/notes/addnote".Login required

router.get('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({min:5}),
    body('description','Description must be 15 characters').isLength({min:15}),
], async (req, res)=>{
   
    try {
        
        const{title, description, tag} = req.body;

        // If there are errors return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        // add new notes
        const note = new Note({title, description, tag, user:req.user.id})
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        
    }
})

module.exports = router