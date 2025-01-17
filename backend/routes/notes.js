const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser'); //for users
const Note = require('../models/Note');     //for note
const { body, validationResult } = require("express-validator"); //data validation using express validator

// Route # 1:- Fetch All the Notes: using GET "/api/notes/fetchallnotes".Login required

router.get('/fetchallnotes', fetchuser, async (req, res)=>{
   try {
    const notes = await Note.find({user: req.user.id});
    res.json(notes)
   } catch (error) {
    res.status(500).send("Internal Server Error");
   }
})

// Route # 2:- Add a New Notes : pOST "/api/notes/addnote".Login required

router.post('/addnote', fetchuser, [
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
        res.status(500).send("Internal Server Error");
    }
})

// Route # 3:- Update a New Notes using: PUT "/api/notes/updatenote/id".Login required
router.put('/updatenote/:id', fetchuser, async (req, res)=>{
    const {title, description, tag} = req.body;

    try {
         //create a new note object
    const newNote = {};
    if (title) {
        newNote.title = title
    }
    if (description) {
        newNote.description = description
    }
    if (tag) {
        newNote.tag = tag
    }

    // Find the note to be updated and update it 
    let note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Note Not Found")
    }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed")
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});
        
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }


})

// Route # 4:- Delete a Notes using: delete "/api/notes/deletenote/id".Login required
router.delete('/deletenote/:id', fetchuser, async (req, res)=>{
    try {
        //Find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note Not Found")
        }

        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted", note:note})
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router