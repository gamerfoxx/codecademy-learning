const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements } = require('./utils');

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
  //Get the index of the perameter ID in question, and locate it in expressions
  if(expressionIndex !== -1){
    //if the expression is found
    updateElement(req.params.id, req.query, expressions)
    //updates the 
    res.send(expressions[expressionIndex])
    //send the item from the expressions array at the expressionIndex
  } else{
    res.status(404).send();
    //if the expression is not found send 404 error
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});