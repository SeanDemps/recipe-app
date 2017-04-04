"use strict";
const express = require('express');
const app = express();

const recipeService = require('./recipe-service');
const starService = require('./star-service');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET")
  next();
});

app.get('/recipes', (req, res) => {
    const pageNumber = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const userId = req.query.userId ? parseInt(req.query.userId) : null;

    const recipesToReturn = recipeService.getRecipes(pageNumber, limit, userId);
    
    res.send(recipesToReturn);
});

app.get('/recipe-detail', (req, res) => {
    const recipeId = parseInt(req.query.recipeId);
    const userId = parseInt(req.query.userId);

    const recipeToReturn = recipeService.getRecipeDetail(recipeId, userId);
    
    res.send(recipeToReturn);
});

app.get('/stars', (req, res) => {
    const pageNumber = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const userId = parseInt(req.query.userId);

    const starIds = starService.getStarsForUser(userId);
    const starredRecipes = recipeService.getSpecificRecipes(starIds, pageNumber, limit);

    res.send(starredRecipes);
});

app.post('/star/:starId', (req, res) => {
    const starId = parseInt(req.params.starId);
    const userId = parseInt(req.query.userId);

    starService.addStarForUser(starId, userId);
    res.send({});
});

app.delete('/star/:starId', (req, res) => {
    const starId = parseInt(req.params.starId);
    const userId = parseInt(req.query.userId);

    starService.removeStarForUser(starId, userId);
    res.send({});
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});