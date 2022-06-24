import React from 'react';
import ReactDOM from 'react-dom';
// Required for react components
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
// Basic component structure
 
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
// How to render to the live document