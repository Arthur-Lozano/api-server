'use strict';

//route level middleware and can be used on any route it is called on
module.exports = (req, res, next) => {
  console.log('request info', req.path, req.method);
}