const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

// Add your DELETE handler below:
app.delete('/expressions/:id', (req, res, next) => {
  const expressionToDelete = getIndexById(req.params.id, expressions);
  //finds the index of the expression to delete 
  if (expressionToDelete !== -1) {
    //confirms the expression to delete exists
    expressions.splice(expressionToDelete, 1);
    //removes the expression to delete
    res.status(204).send();
    //sends the status to let the system know it is completed
  } else {
    res.status(404).send();
    //if index not located, an error is send
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
