import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>2 + 3</h1>,
//   Will render 2 + 3 in the browser, not evaluate. To have this evaluate to 5 must use   <h1>{2 + 3}</h1> syntax
  document.getElementById('app')
)

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>

ReactDOM.render(
  math,
  document.getElementById('app')
)