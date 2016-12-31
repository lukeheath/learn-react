import React from 'react'
import { render } from 'react-dom'

/* CONTAINERS --- */
import Example from 'containers/Example'

/* ADD BASE/GLOBAL STYLES --- */
/* IGNORE THIS FOR NOW - WE'LL COVER IT LATER, BUT THIS IS GOING TO GIVE US SOME SUPER BASIC STYLES --- */
require('./../styles/base.scss')

/* RENDER WITH REDUX / REACT ROUTER --- */
render((
    <Example />
), document.getElementById('root'))