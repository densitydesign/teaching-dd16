import React from 'react';
import Button from './button.js';

class Cookies extends React.Component {
  render() {
    return (
      <div id="cookies--disclaimer"><p>This website uses cookies.</p>
      <Button text="Accept" /></div>
    )
  }
}

export default Cookies;
