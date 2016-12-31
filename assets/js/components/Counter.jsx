import React, { Component } from 'react'

class Counter extends Component {
  
  constructor(props){
      super(props)
      this.state = {
          tally: this.props.tally
      }
      this.add = this.add.bind(this)
      this.subtract = this.subtract.bind(this)
  }
  
  add(ev){
      ev.preventDefault()
      var tally = this.state.tally + this.props.increment > this.props.max ? this.props.max : this.state.tally + this.props.increment
      this.setState({
          tally
      })
  }
  
  subtract(ev){
      ev.preventDefault()
      var tally = this.state.tally - this.props.increment < this.props.min ? this.props.min : this.state.tally - this.props.increment
      this.setState({
          tally
      })
  }
  
  render() {
    return (
        <div>
            <button onClick={ this.subtract }>Subtract</button>
            <p><small>{ this.props.name }</small></p>
            <h2>{ this.state.tally }</h2>
            <button onClick={ this.add }>Add</button>
        </div>
    );
  }

}

Counter.defaultProps = {
    tally: 0,
    increment:1,
    max:10,
    min:0,
    name:"Points"
}

export default Counter