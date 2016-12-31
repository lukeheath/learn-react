import React, { Component } from 'react'

class Menu extends Component {
  render() {
    var menuItems = this.props.menuItems.map(function(menuItem, i){
        return <li key={ `menu-item-${i}` }><a href={`#${ menuItem.location }`}>{ menuItem.text }</a></li>
    })
    return (
        <header>
            <ul>
                { menuItems }
            </ul>
        </header>
    );
  }
}

Menu.defaultProps = {
    menuItems:[]
}

export default Menu