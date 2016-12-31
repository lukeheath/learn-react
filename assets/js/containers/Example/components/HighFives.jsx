import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ExampleActions from 'actions/Example'

@connect(state => ({
    highFives: state.Example.highFives    
}))

class HighFives extends Component {
  
  constructor(props){
      super(props)
      this.add = this.add.bind(this)
      this.subtract = this.subtract.bind(this)
  }
  
  add(ev){
      ev.preventDefault()
      this.props.dispatch( ExampleActions.addHighFives(this.props.increment) )
  }
  
  subtract(ev){
      ev.preventDefault()
      this.props.dispatch( ExampleActions.subtractHighFives(this.props.increment) )
  }
  
  render() {
    return (
        <div>
            <button onClick={ this.subtract }>Subtract</button>
            <p><small>High Fives</small></p>
            <h2>{ this.props.highFives }</h2>
            <button onClick={ this.add }>Add</button>
        </div>
    );
  }

}

HighFives.defaultProps = {
    increment:1,
    max:10,
    min:0,
    name:"Points",
    highFives: 0
}

export default HighFives