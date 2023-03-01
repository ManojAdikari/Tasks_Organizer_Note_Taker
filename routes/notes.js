//-------------Imports Files and Modules for Application to run:
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
//-------------Using Json Package, creates a Unique ID for Each Note added by the User, this is then Amended/Appended to the notes.HTML File:
const { v4: uuidv4 } = require('uuid');

//-------------'Post' code for the User Input upon each new note, it will pasre as a JSON then be written to the db.js file:.
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

//-------------'Get' code for the User Input that will save as a JSON that is read by the db.js file:
app.get("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

//-------------'Deletes' code, for User to Delete Previous Notes:
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

//-------------Exports the "post.js" File:
module.exports = app;