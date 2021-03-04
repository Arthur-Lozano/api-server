'use strict';

// const clothesModel = require('./clothes');
// const foodModel = require('./food');


//Our CRUD wrapper for actions against the DB

class DataCollection {
  constructor(models) {
    this.model = models;
  }

  get(_id) {
    if (_id) {
      return this.model.findOne({ _id })//findOne is a mongoose method to find one specific item
    } else {
      return this.model.find({});
    }
  }

  create(record) {
    let newRecord = new this.model(record);
    return newRecord.save();//.save is a mangoose method that will save stuff to our db
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    console.log(_id);
    return this.model.findByIdAndDelete(_id);
  }

}



module.exports = DataCollection;