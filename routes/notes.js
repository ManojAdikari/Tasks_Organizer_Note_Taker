//Imports Files
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

//Post
app.post("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes),
      (err) => {
        if (err) throw err;
        res.json(newNote);
      }
    );
  });
});

//get
app.get("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});


//Deletes
app.delete("/notes/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const noteId = req.params.id;
    const newNotes = notes.filter((note) => note.id !== noteId);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(newNotes),
      (err) => {
        if (err) throw err;
        res.json(newNotes);
      }
    );
  });
});





module.exports = app;