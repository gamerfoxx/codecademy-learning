import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button'}
//applies the text

ReactDOM.render(
  <Button text=""/>, 
//   removes the text
  document.getElementById('app')
);