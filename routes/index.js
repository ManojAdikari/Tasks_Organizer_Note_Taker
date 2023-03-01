//Imports Files
const express = require('express');
const app = express();
const note = require ('./notes');

app.use('/api', note);

module.exports = app;