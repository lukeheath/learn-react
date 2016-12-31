import React, { Component } from 'react'

class Menu extends Component {
  
    constructor(props){
        super(props)
        this.getMenuItems = this.getMenuItems.bind(this)
    }

    getMenuItems() {
        return this.props.menuItems.map(function(menuItem, i){
            return <li key={ `menu-item-${i}` }><a href={`${ menuItem.location }`}>{ menuItem.text }</a></li>
        })
    }

    render() {
        return (
            <header>
                <ul>
                    { this.getMenuItems() }
                </ul>
            </header>
        );
    }

}

Menu.defaultProps = {
    menuItems:[]
}

export default Menu