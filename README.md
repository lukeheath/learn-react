Redux
-----

Ok, let's talk about Redux. This one can get a little complicated when you start getting into one way data flows and the Flux pattern designed by Facebook.

Here it is in a nutshell: Redux makes data globally accessible to your components as a prop. Cool, huh?

I'm going to break this one into pieces before we look at the entire file. First, we need to import our Redux functions:
```
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
```

Before we get to the next part of this file, we need to talk about _Actions_ and _Reducers_ (because the next thing we need to go is create a _store_ with those actions and reducers).

---------

## Actions
For this, I've created a basic action called _"Increment"_ inside `/assets/js/actions/Example.js`:
```
export const INCREMENT = 'INCREMENT';
export const increment = () => {
    return {
        type: INCREMENT,
        payload: true
    }
}
```

It looks messy and redundant, but really it's just a helper function for what are called _dispatches_. So, what's a dispatch?

*To _dispatch_ something means that you're sending data to a _reducer_*

#### Basically...

*Dispatch:* Sends Data.
*Reducer:* Assigns data to object.

Here's a simple dispatch:
```
this.props.dispatch({
    type: 'Increment',
    payload: data
})
```

This gets a bit messy and it's not super readable. Remember the _Actions_ from earlier. Here's what it looks like doing a dispatch using _Actions_:
```
this.props.dispatch( ExampleActions.increment() )
```

This is much easier to read! It becomes especially helpful when you have lots of basic crud actions like _Create_, _Update_, _Destroy_. You can set up your actions to do something like this:
```
this.props.dispatch( ExampleActions.create(data) )
```

Instead of:
```
this.props.dispatch({
    type: 'ExampleCreate',
    payload: data
})
```

Generally, this makes your code more readable. I know it doesn't look like a big difference, but it pays off in the long run!

Also, I use _Actions_ to do any data manipulation that's necessary before we send things off to the _reducer_. It keeps me from doing any data transforms before a dispatch call and that helps keep our code _DRY_. In other words, much more reusable!

---------

## Reducers

Here is our example _reducer_:
```
import * as ExampleActions from 'actions/Example'

let initialState = {
    tally: 0
}

function Example(state = initialState, action) {
    switch (action.type) {
        case ExampleActions.INCREMENT:
            return {
                ...state,
                tally: state.tally + 1
            }
        default:
            return state
    }
}

export default Example
```

The reducer _returns_ the updated value of the state. We're using a bunch of ES6 helpers here. Let's break them down before moving ahead.

First, the `Example.js` actions file exports _a lot_ of stuff. By doing this:
```
import * as ExampleActions from 'actions/Example'
```

Instead of having a bunch of _imports_ available as global variables, this make puts them all as object properties. For example, instead of:
```
this.props.dispatch( create(data) )
```

We have:
```
this.props.dispatch( ExampleActions.create(data) )
```

This is really helpful when we're handling multiple types of actions on one page.

We're also using _default function values_:
```
function Example(state = initialState, action) {
    ...
}
```

In this example, we need state to be set, so we're able to have a _default state value_ if it hasn't been set.

We're also making use of the spread operator for returning the updated state:
```
{
    ...state,
    tally: state.tally + 1
}
```

This allows us to combine objects without overwriting existing properties. It basically works the same way that [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) works.

---------

## Putting it all Together

_src: `/assets/js/index.js`:_
```
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
```

We now have the `<Provider />` component which acts as a parent passing `props` to children. We also have our `reducers` and `actions`.

At this point, _everything should look the same_.

---------

## Quick Recap

- Redux allows you to share data between components as props
- Dispatches send data
- Actions make dispatches more explicit and are not required, but are helpful
- Reducers apply data updates to the shared Redux State object

---------

## Let's Redux!

We already have the counter, but it's really designed to showcase the use of _State_. Let's create a *new* component, that's pretty much identical, but designed to showcase *Redux*:

_src: `/assets/js/containers/Example/components/HighFives.jsx`:_
```
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
```

To support this functionality, we ned to update our _ExampleActions_ and our _ExampleReducer_:

_src: `/assets/js/actions/Example.js`:_
```
export const INCREMENT = 'INCREMENT';
export const increment = () => {
    return {
        type: INCREMENT,
        payload: true
    }
}

export const ADD_HIGH_FIVES = 'ADD_HIGH_FIVES';
export const addHighFives = (inc) => {
    return {
        type: ADD_HIGH_FIVES,
        payload: inc
    }
}

export const SUBTRACT_HIGH_FIVES = 'SUBTRACT_HIGH_FIVES';
export const subtractHighFives = (inc) => {
    return {
        type: SUBTRACT_HIGH_FIVES,
        payload: inc
    }
}
```

_src: `/assets/js/reducers/Example.js`:_
```
import * as ExampleActions from 'actions/Example'

let initialState = {
    tally: 0,
    highFives: 0
}

function Example(state = initialState, action) {
    switch (action.type) {
        
        case ExampleActions.INCREMENT:
            return {
                ...state,
                tally: state.tally + 1
            }

        case ExampleActions.ADD_HIGH_FIVES:
            return {
                ...state,
                highFives: state.highFives + action.payload
            }

        case ExampleActions.SUBTRACT_HIGH_FIVES:
            return {
                ...state,
                highFives: state.highFives - action.payload
            }

        default:
            return state

    }
}

export default Example
```

And we need to use our new component!

_src: `/assets/js/containers/Example/index.jsx`:_
```
import React, { Component } from 'react'

import Menu from 'components/Menu'
import FancyTitle from 'components/FancyTitle'
import Counter from './components/Counter'
import HighFives from './components/HighFives'

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
            <HighFives max={ 30 } min={ -10 } increment={ 2 } />
            <Counter name="Backflips" max={ 5 } />
        </div>
    )
  }
}

export default Example
```

### WOW, We Updated all the things!
Let's recap what we've done:
- Created a New `HighFive.jsx` component that updates the _Redux State_ instead of its internal state.
- Updated our `ExampleActions` to support _adding_ and _subtracting_ HighFives
- Updated our `ExampleReducer` so that it manages the _Redux State_
- Added the new `<HighFive />` component to our `Example` page.

Again, everything should look _the same_, but now you have High Fives as part of a globally accessible state regardless of parent/child relationships of the component.

---------

## Looking Closer at the <HighFives /> Component

First, we're using the _experimental_ ES6 decorator to _connect_ our Redux state. Notice that the state is automagically assigned to the `Example` property of the _state object_ because the reducer is exporting that as its name:
```
@connect(state => ({
    highFives: state.Example.highFives    
}))
```

Next, we have updated our `add` and `subtract` functions to dispatch:
```
add(ev){
    ev.preventDefault()
    this.props.dispatch( ExampleActions.addHighFives(this.props.increment) )
}

subtract(ev){
    ev.preventDefault()
    this.props.dispatch( ExampleActions.subtractHighFives(this.props.increment) )
}
```

We are also no longer showing the state of the `tally` like the `<Counter />` component does, but showing the `prop`:
```
<h2>{ this.props.highFives }</h2>
```

And, even though we shouldn't have a problem with it - it's a good idea to add the default for the _connected_ props anyway, so we added *highFives* to our *defaultProps*:
```
HighFives.defaultProps = {
    increment:1,
    max:10,
    min:0,
    name:"Points",
    highFives: 0
}
```

Take a moment to compare the `<Counter />` side by side with `<HighFives />` and explore a bit!

---------

## Using our Data in Other Components
So, it doesn't make sense to use Redux unless you need to use things across components that don't have a parent / child relationship. Or you just need flexibility.

This is pretty important: *NOT EVERY APPLICATION NEEDS REDUX*. Just because it's the new _hot sauce_ in town doesn't mean you have to use it. :)

So, let's _connect_ our *highFives* to the basic example:

First, import the connect function:
```
import { connect } from 'react-redux'
```

Then, we connect it!
```
@connect(state => ({
    highFives: state.Example.highFives    
}))
```

Display our connected data
```
<h1>Current High Five Count: { this.props.highFives }</h1>
```

Protect our component with `defaultProps`
```
Example.defaultProps = {
    highFives: 0
}
```

### Put it all Together

```
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
```

Ok, that should cover the basics. Lots of complicated stuff in here! Take your time to digest it all before moving on to the next section. This is definitely the *hardest* part of this walkthrough. If you survived, you'll breeze through the rest. :)


In the mean time, we've managed to make a pretty ugly web page (hooray?). Make sure your stuff looks like this before moving along:



---------

Ready for more?
- [Basic Components](https://github.com/ecoker/learn-react/tree/basic-components)
- [Props](https://github.com/ecoker/learn-react/tree/props)
- [State](https://github.com/ecoker/learn-react/tree/state)
- Redux
- [Forms](https://github.com/ecoker/learn-react/tree/forms)
- [Events](https://github.com/ecoker/learn-react/tree/events)
- [SVGs](https://github.com/ecoker/learn-react/tree/svgs)
- [Stylesheets](https://github.com/ecoker/learn-react/tree/stylesheets)