Basic Components
-----------------

Components are pretty straightforward, but they get really confusing really fast.

For simplicity, I break components into categories:
- Global Components
- Containers
- Local Components
- Icons

### Global Components
These are shared by all your containers. They can be used _anywhere_ and are super handy. Examples would be something like a _Menu_ or a _Modal_.

### Containers
These are typically _Pages_ or _Site Sections_ that hold one or more components.

### Local Components
The great thing about React is the ability to *isolate* the various bits of interactions and (later) styles. For that reason, you may want to create components that are only used by specific _Containers_. I call those _Local Components_.

### Icons
Icons are special components that return an SVG element. You can add event bindings and logic to these as well, but I would typically encourage you to use them only as pure SVG elements. Inlining SVG code gives you the ability to inherit font colors and some other sizing advantages across browsers.

-------

## File Conventions
Depending on how you're combinding and minifying your files, it really doesn't matter what you name your component files, but I would humbly submit the following two _"rules"_:

- Use Capital words for the filename and when importing the component. It makes it easier to distinguish components in your markup. Example: `Component`
- Use the `.jsx` extention. Yes, it's weird, but it does use jsx syntax and that helps differentiate for other files: `Component.jsx`

-------

## Example Global Component

Let's assume that a bunch of our future containers are going to use the same _Menu_.

_src: `/assets/js/commponents/Menu.jsx`_
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

Great! We have a _Global Component_. Let's use it!

## Example Container Component

_src: `/assets/js/containers/Example/index.js`_
```
import React, { Component } from 'react'

import Menu from 'components/Menu.jsx'

class Example extends Component {
  render() {
    return (
        <Menu />
    );
  }
}

export default Example
```

Take a moment to _Lift Your Sails_: `sails lift` and preview the site: [Your Local Site](http://localhost:1337)


---------

### Ok, you probably see something weird here
Did you notice that the import for the _Menu_ didn't have a relative link? It just started with `components`. That's because of our webpack configuration.

We've got a bunch of *aliases* and *extensions* defined that are going to clean up your code.

So, what does that mean? It means that you can start an import with `components` from any _component_ regardless of how much it's nested and it will resolve based on the path relative to the `assets/js` folder. _It's magic!_

Here's what's in there now:
```
resolve: {
    root: path.resolve(__dirname, '../assets/js'),
    alias: {
        containers: 'containers',
        components: 'components',
        actions: 'actions',
        reducers: 'reducers',
        icons: 'icons',
        services: 'services',
        styles: '../styles'
    },
    extensions: ['', '.js', '.jsx', '.scss']
}
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