import React, { Component } from 'react'

class FancyTitle extends Component {
  render() {
    return (
        <h4 className="fancy-title">{ this.props.text }</h4>
    );
  }
}

FancyTitle.defaultProps = {
    text: "I need a text prop!"
}

export default FancyTitle