### React Router - [Follow Offical Documentation 🔗](https://reactrouter.com/en/main)

React Router is a crucial library in the world of React, enabling developers to create complex, dynamic, and navigable web applications.

It was developed and is maintained by a community of open-source developers. While it doesn’t have a single individual or organization associated with its development, it is a widely used and well-maintained project with contributions from various developers over time.

It serves as a tool for building single-page applications (SPAs) and managing client-side routing.

The real beauty of React Router is that when you switch between URLS (pages) the entire page does NOT reload! Instead a different component or set of components is rendered, which means the navigation experience switching between “pages” is so much quicker and seamless. It makes navigating between pages feel like you are using an app, rather than waiting for a page to load up with a blank screen whilst the server fetches the new page. In essence, it’s just a far nicer user experience!

React Router enables the creation of routes, which are essentially mappings between URLs and React components. When a user navigates to a specific URL, React Router ensures that the corresponding component is rendered, providing a seamless and dynamic user experience.

### How React Router Works

React Router works by providing a set of components that are used to define routes within a React application. These components include BrowserRouter, Route, Switch, and Link, among others. Here's an overview of how React Router works:

1. BrowserRouter: The BrowserRouter component should be wrapped around the entire application. It uses the HTML5 History API to synchronize the URL with the displayed content. It listens for changes to the URL and renders the appropriate component based on the current route.

```js
    ADD CODE
```

2. Routes: The Routes component is used to wrap multiple Route components. It ensures that only the first matching route is rendered. This is particularly useful when defining routes with similar path patterns.

> Note: <Routes> was introduced to React Router in version 6 — Previously you would used <Switch> to wrap multiple Route componments. It worked slightly differently in version 5. In version 6, you can now nest routes and define layouts more intuitively.

```js
    ADD CODE
```

3. Route: The Route component defines a mapping between a URL path and a React component. When the URL matches the specified path, the corresponding component is rendered.

We supply both a “path” and an “element” to each Route. The homepage is always just the “/” and the other pages use “/[page-name]” to signify that the page comes after the forward slash of the site.

So for example, to get to the pricing “page”, the Browser URL would show mywebsite.com/pricing

```js
    ADD CODE
```

> Note how the entire page component is supplied to the element in curly braces { }

```js
<Route path="/product" element={<Product />} />
```

In earlier versions of React Router (v5), you didn’t present it this way…. it would’ve looked like this, using “component” instead of “element”

```js
<Route path="/pricing" component={Pricing} />
```

### Why use React Router for routing?

Traditional multi-page web apps typically have multiple view files (pages) for rendering different views, but modern SPAs use component-based views. So, you need to switch components based on the URL via the routing concept. Every development requirement that occurs in React app development doesn’t need a third-party library. Still, routing-like requirements are undoubtedly complex and need a pre-developed library for creating apps productively.

React Router is the most popular and fully-featured routing library for React-based SPAs. It comes with a lightweight size, easy-to-learn API, and well-written documentation so that every React developer can implement routing productively in any React app. Besides, React Router is now a Remix-maintained project with active development and developer support.

The “element” prop allows you to pass a JSX element directly, which is more in line with the typical way React components are rendered using JSX. It feels more natural and consistent with React’s component-based architecture.

### Handle Page Not Found

To deal with 404 errors where a page doesn’t exist, you should also include a “catch-all” route which will direct a user to a PageNotFound.jsx page component…

```js
import PageNotFound from './pages/PageNotFound'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
```

### Choosing the Right Tool - Adding navigation between pages/components

Use `Link` when you simply need a clickable element to navigate to another part of your application without any visual indication of the active route. It's a lightweight solution for basic navigation needs.

Use `NavLink` when you want to create a navigation bar or menu and visually highlight the currently active link. This enhances the user experience by providing clear feedback on their location within the application.

By understanding the distinction between `Link` and `NavLink`, you can effectively manage navigation in your React applications and create a user-friendly experience.

### Link: The Simple Navigator

The Link component is a straightforward way to create navigation links. It takes a to prop specifying the URL path the link should point to, and onClick, it triggers a navigation using React Router's history API.

> Here’s an example of a Link component:

```js
import {Link, NavLink } from "react-router-dom";

<Link to="home">Home</Link>
<Link to="about">About Us</Link>
<Link to="contact">Contact</Link>
```

> This code creates a link labeled “About Us” that, when clicked, navigates the user to the /about route. However, Link offers no visual indication of the current active route.

### NavLink: Highlighting the Active Path

The NavLink component builds upon Link by adding functionality to display the active link visually. It inherits all the functionalities of Link but with an additional prop: isActive.

> Here’s an example of a NavLink component:

```js
import { NavLink } from 'react-router-dom'

function MyNavLink() {
    return (
        <NavLink to="/" activeClassName="active">
            Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
            About Us
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
            Contact
        </NavLink>
    )
}
```

TO BE Continued...
