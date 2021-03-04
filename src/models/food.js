'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: {type: String, required: true},
  type: { type: String, required: true},
  quantity: { type: Number, required: true}
});

//Creates a mongoose model -> in the db, it creates a collection
const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;