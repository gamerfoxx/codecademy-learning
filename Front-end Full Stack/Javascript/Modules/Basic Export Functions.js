/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength) {
return PI * (radiusLength * radiusLength);
}

function squareArea(sideLength){
return sideLength * sideLength;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
//Could also be 'export default squareArea;' or 'module.exports = circleArea' or 'export { squareArea, circleArea }'

//exporting named variables inline

// export const circleArea = (radiusLength) => {
//     return PI * (radiusLength * radiusLength);
// }