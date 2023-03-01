//-------------Imports Files and Modules for Application to run:
const express = require('express');
const api = require('./routes');

//-------------Telling application to run the relevant port "or" if can't find, then, to run on port "3001":
const PORT = process.env.PORT || 3001;
const app = express();

//-------------Middleware for Parsing JSON and URLEncoded Form Data:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api);

//-------------Middleware for serving Static Files:
app.use(express.static('public'));

//-------------Listening for Requests that End User Will Enter:
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
