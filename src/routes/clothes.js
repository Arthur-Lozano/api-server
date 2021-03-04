'use strict';

const express = require('express');
const clothesModel = require('../models/clothes.js');//schema
const Clothes = require('../models/data-collection-class.js');



//Initiate new category/product
const clothes = new Clothes(clothesModel);//inst new objects based on  data-collection//data-collection is a more dynamic constructor being it is a class


const clothesRoute = express.Router();



//routes for Proucts

clothesRoute.get('/clothes', getClothes);
clothesRoute.get('/clothes/:id', getOneClothes);
clothesRoute.post('/clothes', createClothes);
clothesRoute.put('/clothes/:id', updateClothes);
clothesRoute.delete('/clothes/:id', deleteClothes);

//clothes
async function getClothes(req, res){
  //Get all items from a databae -> CRUD
  let all = await clothes.get();
  //Send items back to user or the -> Response
  res.status(200).json(all);
}

//getOneclothes
async function getOneClothes(req, res){
  let id = req.params.id;
  let clothes = await clothes.get(id);
  res.status(200).json(clothes);
}

//Create clothes
async function createClothes(req, res){
  let obj = req.body;
  console.log('body', req.body);
  let buildClothes = await clothes.create(obj);
  res.status(201).json(buildClothes);
}

//update clothes
async function updateClothes(req, res){
  let id = req.params.id;
  let content = req.body;
  let updatedclothes = await clothes.update(id, content);
  res.status(200).json(updatedclothes);
}

async function deleteClothes(req, res){
  let id = req.params.id;
  let deleteClothes = await clothes.delete(id);
    // if(error){
    //   console.log('error', error)
    // }else {

    // }
  // } );
  console.log(deleteClothes)
  res.status(204).json(deleteClothes);//doesn't dot send
}
module.exports = clothesRoute;
