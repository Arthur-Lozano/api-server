'use strict';

function errorHandler(err, req, res, next){
  res.status(500).send({status:500, msg: 'Sorry the site is having difficulties'});
}

module.exports = errorHandler;
