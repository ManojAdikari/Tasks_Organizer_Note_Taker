//-------------Imports Files and Modules for Application to run:
const express = require('express');
const app = express();
const note = require ('./notes');
const htmlRoute = require('./htmlRoute');

//-------------Middleware telling the Application which Routes to Use:
app.use('/api', note);
app.use('/', htmlRoute);


//-------------Exports the "index.js" File:
module.exports = app;