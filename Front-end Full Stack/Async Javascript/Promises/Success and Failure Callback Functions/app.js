const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(resVal){
  console.log(resVal);
}
function handleFailure(resVal){
  console.log(resVal);
}


checkInventory(order).then(handleSuccess, handleFailure)