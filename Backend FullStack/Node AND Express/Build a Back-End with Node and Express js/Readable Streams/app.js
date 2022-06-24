const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');
//create path to output information

const transformData = (line) => {
fileStream.write(`They were out of: ${line}\n`); 
}
//create logic to complete on each line

myInterface.on('line', transformData);
//creates association between each line event in myInterface to run the transformData function