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
    const All_Nots = JSON.parse(data);
    const New_Text = req.body;
    New_Text.id = uuidv4();
    All_Nots.push(New_Text);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(All_Nots),
      (err) => {
        if (err) throw err;
        res.json(New_Text);
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
    const Note_Id = req.params.id;
    const New_Text = notes.filter((note) => note.id !== Note_Id);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(New_Text),
      (err) => {
        if (err) throw err;
        res.json(New_Text);
      }
    );
  });
});





module.exports = app;