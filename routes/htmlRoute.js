//-------------Imports Files and Modules for Application to run:
const express = require('express');
const app = express();
const path = require("path");

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
    );
//-------------When User Enters Data it will Return the Data and Render to the "notes.html" File:
app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))
    );

//-------------Exports the "htmlRoute.js" File:
module.exports = app;