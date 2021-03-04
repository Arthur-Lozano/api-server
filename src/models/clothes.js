'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: {type: String, required: true},
  brand: { type: String, required: true},
  size: { type: String, required: true}
});

//Creates a mongoose model -> in the db, it creates a collection
const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;