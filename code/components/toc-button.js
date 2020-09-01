import React from 'react';

class Drawer extends React.Component {
  render() {
    return (
      <div className="drawer--button">{ this.props.text }</div>
    )
  }
}

export default Drawer
