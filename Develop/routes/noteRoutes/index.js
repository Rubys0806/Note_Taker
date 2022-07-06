const path = require('path');
const router = require('express').Router();

router.get("/api/notes", function(req, res) {
    res.json(notes);
});

router.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: "+newNote.title);
});

router.get("/api/notes/:id", function(req,res) {
    res.json(notes[req.params.id]);
});


module.exports = router;
