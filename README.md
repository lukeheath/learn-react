Redux
-----

Ok, let's talk about Redux. This one can get a little complicated when you start getting into one way data flows and the Flux pattern designed by Facebook.

Here it is in a nutshell: Redux makes data globally accessible to your components as a prop. Cool, huh?

I'm going to break this one into pieces before we look at the entire file. First, we need to import our Redux functions:
```
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
```

Before we get to the next part of this file, we need to talk about _Actions_ and _Reducers_.

---------

## Actions





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