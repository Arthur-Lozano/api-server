'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    next('Category was not provided')//This is error handling middleware
  } else {
    next();//This is where validator is done and moved to next middleware in the chain
  }
}

module.exports = validator;