const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';
const jsObject = JSON.parse(jsonData);
jsObject.parent.age = 35;

const jsObjectToJson = JSON.stringify(jsObject);

console.log(jsObjectToJson);