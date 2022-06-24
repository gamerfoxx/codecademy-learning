import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
    //How added properties are rendered
  }
}

ReactDOM.render(
  <Greeting firstName='Cawk' />, 
  document.getElementById('app')
);