'use strict';

const  mongoose = require('mongoose');


require('dotenv').config();
const server = require('./src/server.js');

const MONGODB_URI = 'mongodb://localhost:27017/clothes-food';

const options = { useNewUrlParser: true, useUnifiedTopology: true }; // always pass in these options

mongoose.connect(MONGODB_URI, options)
  .then(() => {
  server.start(process.env.PORT || 3333);
});


// mongoose 
// server

// start monggose server in here