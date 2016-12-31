import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

/* CONTAINERS --- */
import Example from 'containers/Example'

/* COMBINE REDUCERS --- */
import * as reducers from './reducers'
export const store = createStore(
    combineReducers({
        ...reducers
    })
)

/* ADD BASE/GLOBAL STYLES --- */
/* IGNORE THIS FOR NOW - WE'LL COVER IT LATER, BUT THIS IS GOING TO GIVE US SOME SUPER BASIC STYLES --- */
require('./../styles/base.scss')

/* RENDER WITH REDUX --- */
render((
    <Provider store={ store }>
        <Example />
    </Provider>
), document.getElementById('root'))