const express = require('express');
const { seedElements, getElementById, createElement, updateElement, getIndexById } = require('./utils');
//all required to make this route work
const expressions = [];
seedElements(expressions, 'expressions');
//creates the array, and the seed
const expressionsRouter = express.Router();
//creates the router
module.exports = expressionsRouter;
//exports to app.js

// Get all expressions
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});

