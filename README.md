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