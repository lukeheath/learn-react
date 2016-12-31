import React, { Component } from 'react'

import Menu from 'components/Menu.jsx'
import FancyTitle from 'components/FancyTitle.jsx'

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
        </div>
    )
  }
}

export default Example