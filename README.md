State
-----

Now that we've introduced _Props_, we need to talk about _State_. State is typically used for representing the state of an element (surprise!). The thing to know is that _State_ typically doesn't leave a component.

I like to think of it like variables inside of a function, where props would be what's passed into a function and state is what's inside the function.
```
var example = function(props) {
    var state = {
        clicks: props.clicks
    }
    ...
}
```

Similar to state. The variable `state` inside that very fancy function would be stuck inside the scope of that function. Certainly, you can find ways to pass it to something else, but by default it is going to remain with the function.

The same _should_ be true for components. 

Let's create a new _Local Component_ to illustrate. Take note of the location of the file. We've placed it inside the _Example_ Container folder. That's because we plan to never use this outside of the Example Container and if we get rid of it some day, we want it to go away too.

> This is personal preference for my own file organization. If you don't like it, toss it out! :)

_src: `/assets/js/containers/Example/components/Counter.jsx`_
```
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
      this.setState({
          tally: this.state.tally + 1
      })
  }
  
  subtract(ev){
      ev.preventDefault()
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
```

First off, State is similar to props where the helper functions and the value of the current state is only accessible to custom functions if you bind them to the Component `this`. There are other ways to bind that value, but I like doing it in the constructor because it's pretty easy to see what's going on.
```
constructor(props){
    super(props)
    this.state = {
        tally: this.props.tally
    }
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
}
```

You'll also see our first _Event_ binding. We'll cover those in detail later, but it was hard to avoid using an event here.
```
<button onClick={ this.subtract }>Subtract</button>
```

`onClick` tells react to call that function whenever you click. By default, it will pass in the event that triggered the function. You can pass custom variables into the function as well, but it gets messy and I'd encourage you to get clever with _State_ and _Props_ instead.

So, that's great, but what if we want to combine our use of props and state on this component? Let's modify it a bit!

_src: `/assets/js/containers/Example/components/Counter.jsx`_
```
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
```

Now that we have some props we can pass in there, let's update our _Container Component_. 

> Notice that the location of the import is different since it's relative to the location of this component instead of using the aliases from the WebPack config.

_src: `/assets/js/containers/Example/components/Counter.jsx`_
```
import React, { Component } from 'react'

import Menu from 'components/Menu'
import FancyTitle from 'components/FancyTitle'
import Counter from './components/Counter'

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
            <Counter name="High Fives" max={ 30 } min={ -10 } increment={ 2 } />
            <Counter name="Backflips" max={ 5 } />
        </div>
    )
  }
}

export default Example
```

Now we're using some of our props and we are using multiple instances of the _same_ component! In this instance, we're incrementing _"High Fives"_ by two, because your friend who gives you High Fives always uses both hands. We're also allowing a minimum of -10 because sometimes you owe people a high five.

Backflips, on the other hand, only increment by the default (1) and you have a max of 5 before you pass out from exhaustion. 

---------

### Taking a Closer Look
Let's take a closer look at a few things. Did you notice this in our `Counter.jsx` file?
```
this.setState({
    tally
})
```

This is a handy ES6 feature. If you have a variable with the same name as a key for an object you're defining, you can just place the variable in there instead of being repetative. Basically, it's shorthand for this:
```
this.setState({
    tally: tally
})
```

Really nice removing the redundancy!

Also, did you notice the way we're setting numbers?
```
<Counter name="High Fives" max={ 30 } min={ -10 } increment={ 2 } />
```

 They're in brackets the same way we pass variables to a component. In other words, why didn't we do this?
```
<Counter name="High Fives" max="30" min="-10" increment="2" />
```

Long story short, that turns our _numbers_ into _strings_. If you're passing _numbers_ into a component and you want them to remain _numbers_, pass them in with brackets!


---------

Ready for more?
- [Basic Components](https://github.com/ecoker/learn-react/tree/basic-components)
- [Props](https://github.com/ecoker/learn-react/tree/props)
- State
- [Redux](https://github.com/ecoker/learn-react/tree/redux)
- [Forms](https://github.com/ecoker/learn-react/tree/forms)
- [Events](https://github.com/ecoker/learn-react/tree/events)
- [SVGs](https://github.com/ecoker/learn-react/tree/svgs)
- [Stylesheets](https://github.com/ecoker/learn-react/tree/stylesheets)