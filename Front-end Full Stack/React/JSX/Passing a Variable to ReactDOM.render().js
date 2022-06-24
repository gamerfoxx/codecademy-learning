import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Learn React</li>
    <li>Become a dick</li>
  </ul>
);

ReactDOM.render(
  myList, 
  document.getElementById('app')
);