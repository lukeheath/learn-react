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
  
  add(){
      this.setState({
          tally: this.state.tally + 1
      })
  }
  
  subtract(){
      this.setState({
          tally: this.state.tally - 1
      })
  }
  
  render() {
    return (
        <div>
            <button onClick={ this.subtract }>Subtract</button>
            <p>{ this.state.tally }</p>
            <button onClick={ this.add }>Add</button>
        </div>
    );
  }

}

Counter.defaultProps = {
    tally: 0
}

export default Counter