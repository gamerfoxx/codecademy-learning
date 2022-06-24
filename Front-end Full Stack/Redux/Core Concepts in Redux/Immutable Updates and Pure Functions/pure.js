//original
// const fs = require('fs');
// const file = './data.txt';

// const capitalizeMessage = (file) => {
//   const message = fs.readFileSync(file, 'utf8');
//   return message.toUpperCase();
// }

// console.log(capitalizeMessage(file));

const fs = require('fs');
const file = './data.txt';

const message = fs.readFileSync(file, 'utf8');
const capitalizeMessage = (message) => {

  return message.toUpperCase();
}

console.log(capitalizeMessage(message));