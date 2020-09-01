import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="button">{ this.props.text }</div>
    )
  }
}

export default Button
