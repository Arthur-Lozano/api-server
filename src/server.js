'use strict';


const express = require('express');
const dotenv = require('dotenv');

const clothesRoutes = require('./routes/clothes.js')//++
const foodRoutes = require('./routes/food.js')//++

// const errors = ('./error-handlers/500.js')//++

// const mongoose = require('mongoose');
// const Food = require('./models/food.js');
// const Clothes = require('./models/clothes.js');
const app = express();
dotenv.config();

app.use(express.json());
app.use(clothesRoutes);
app.use(foodRoutes);


function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}

// app.use(errors);
module.exports = {
  app: app,
  start: start
}
