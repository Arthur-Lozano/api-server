'use strict';

const  mongoose = require('mongoose');


require('dotenv').config();
const server = require('./src/server.js');

const MONGODB_URI = process.env.MONGODB_URI;

const options = { useNewUrlParser: true, useUnifiedTopology: true }; // always pass in these options

mongoose.connect(MONGODB_URI, options)
  .then(() => {
  server.start(process.env.PORT || 3333);
});


// mongoose 
// server

// start monggose server in here