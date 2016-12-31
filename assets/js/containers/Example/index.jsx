import React, { Component } from 'react'

import Menu from 'components/Menu'
import FancyTitle from 'components/FancyTitle'
import Counter from 'components/Counter'

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
            <FancyTitle text="I'm a Prop!" />
            <Counter />
        </div>
    )
  }
}

export default Example