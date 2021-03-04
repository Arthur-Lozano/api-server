'use strict';



const express = require('express');
const FoodModel = require('../models/food.js');
const Food = require('../models/data-collection-class.js');


//Initiate new food product
const food = new Food();


const foodRoute = express.Router();



//routes for Proucts

foodRoute.get('/food', getFood);
foodRoute.get('/food/:id', getOneFood);
foodRoute.post('/food', createFood);
foodRoute.put('/food/:id', updateFood);
foodRoute.delete('/food/:id', deleteFood);

//food
async function getFood(req, res){
  //Get all items from a databae -> CRUD
  let all = await food.get();
  //Send items back to user or the -> Response
  res.status(200).json(all);
}

//getOnefood
async function getOneFood(req, res){
  let id = req.params.id;
  let food = await food.get(id);
  res.status(200).json(food);
}

//Create food
async function createFood(req, res){
  let obj = req.body;
  console.log('body', req.body);
  let buildFood = await food.create(obj);
  res.status(201).json(buildFood);
}

//update food
async function updateFood(req, res){
  let id = req.params.id;
  let content = req.body;
  let updatedFood = await food.update(id, content);//instance of data collection class
  res.status(200).json(updatedFood);
}

async function deleteFood(req, res){
  let id = req.params.id;
  let deleteFood = await food.delete(id);
  res.status(204).send(deleteFood);
}
module.exports = foodRoute;
