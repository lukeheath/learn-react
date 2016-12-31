import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from 'components/Menu'
import FancyTitle from 'components/FancyTitle'
import Counter from './components/Counter'
import HighFives from './components/HighFives'

@connect(state => ({
    highFives: state.Example.highFives    
}))

class Example extends Component {
  render() {
    /* 
    // LATER THIS SHOULD COME FROM A SERVICE OR API CALL
    */
    var menuData = {
        menuItems: [
            {
                text: 'home',
                location: '/'
            },
            {
                text: 'about',
                location: '/#about'
            },
            {
                text: 'contact',
                location: '/#contact'
            }
        ]
    }
    return (
        <div>
            <Menu { ...menuData } />
            <h1>Current High Five Count: { this.props.highFives }</h1>
            <FancyTitle text="I'm a Prop!" />
            <HighFives max={ 30 } min={ -10 } increment={ 2 } />
            <Counter name="Backflips" max={ 5 } />
        </div>
    )
  }
}

Example.defaultProps = {
    highFives: 0
}

export default Example