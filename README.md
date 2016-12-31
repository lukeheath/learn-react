Basic Components
-----------------

Components are pretty straightforward, but they get really confusing really fast.

For simplicity, I break components into a couple of categories:
- Global Components
- Containers
- Local Components
- Icons

### Global Components
These are shared by all your containers. They can be used _anywhere_ and are super handy. Examples could be a _Modal_ or an _Error Message_ or a fancy link.

### Containers
These are typically _Pages_ or _Site Sections_ that hold lots of components. It's nice to have a wrapper for stuff when you need it.

### Local Components
The great thing about React is the ability to *isolate* the various bits of interactions and (later) styles. For that reason, you may want to create components that are only used by specific _Containers_.

### Icons
Icons are special components that return an SVG element. You can add event bindings and logic to these as well, but I would typically encourage you to use them only as pure SVG elements. Inlining SVG code gives you the ability to inherit font colors and some other sizing advantages across browsers.

-------

## File Conventions
Depending on how you're combinding and minifying your files, it really doesn't matter what you name your component files, but I would humbly submit the following _"rules"_.

- Use Capital words for the filename and when importing the component. It makes it easier to distinguish components in your markup. Example: `Component`
- Use the `.jsx` extention. Yes, it's weird, but it does use jsx syntax and that helps differentiate for other files: `Component.jsx`

That's it, really. :)

-------

## Example Container Component
This is a basic container. 

_src: `/assets/js/containers/Example/index.js`_
```
import React, { Component } from 'react'

class Example extends Component {
  render() {
    return (
        <h1>Hello World</h1>
    );
  }
}

export default Example
```

Ok, so that's boring, but it's easy to read. Let's import a _Global Component_.
_src: `/assets/js/containers/Example/index.js`_
```
import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
        <header>
            <h2>Menu goes here...</h2>
        </header>
    );
  }
}

export default Menu
```



---------

Topics:
- Basic Components
- [Props](https://github.com/ecoker/learn-react/tree/props)
- [State](https://github.com/ecoker/learn-react/tree/state)
- [Redux](https://github.com/ecoker/learn-react/tree/redux)
- [Forms](https://github.com/ecoker/learn-react/tree/forms)
- [Events](https://github.com/ecoker/learn-react/tree/events)
- [SVGs](https://github.com/ecoker/learn-react/tree/svgs)
- [Stylesheets](https://github.com/ecoker/learn-react/tree/stylesheets)