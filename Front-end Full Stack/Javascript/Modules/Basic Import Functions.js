/* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
require('./shape-area.js')
// const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);
//If 2 functions have the same name use 
//import { validate as validateNameOne } from './file-path.js'
//import { validate as validateNameTwo } from './second-file-path.js'