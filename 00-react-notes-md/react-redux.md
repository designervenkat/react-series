# React Redux

#### Follow Offical Document Links [React Redux](https://react-redux.js.org/) || [Redux](https://redux.js.org/) || [Redux Toolkit](https://redux-toolkit.js.org/)

What does state management means when it comes to application development ?

> State Management is some thing which takes care of the changes in any part of the components/application. In layman term, it is nothing but a management of a data state for event handling inside the application.

![React Redux](https://i.postimg.cc/ydY7SvmX/0-Ft-TETb-Qa5g-UZ2-ZBC.webp)

### What is Redux

### Single source of truth! THE STORE

Redux is a predictable state container in Javascript app. What does that mean? Well, Redux helps in state management by storing all the states which needs to be changed through out the app in one place, which we usually call it as Store.

-   ### Offical Statement

Redux is a JS library for predictable and maintainable global state management.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

Redux Toolkit is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.

Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better

### Important things to learn - API Overview

### Provider

React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app:

```js
import { Provider } from 'react-redux'
import store from './store'
;<Provider store={store}>
    <App />
</Provider>
```

### Redux Hooks

React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store.

-   `useSelector` reads a value from the store state and subscribes to updates,

-   while `useDispatch` returns the store's dispatch method to let you dispatch actions.

```js
import { useSelector, useDispatch } from 'react-redux'

export function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
}
```

![Redux Works](https://i.postimg.cc/nzR9ssDr/0-6i7cw-Hs-FE2-Xf-KNz4.webp)

### Three building blocks make this ‘magic’ work:

-   The store - The Store is the single source of truth for the state of your application. It holds the entire state tree of your application and provides methods to interact with the state. To create a Redux store, you will need to import the createStore function from the Redux library and pass it a reducer.

-   The actions - Actions are plain JavaScript objects that represent the intention to change the state. They must have a type property, which is usually a string constant, and can contain additional data in the form of a payload.

-   The reducers - Reducers are pure functions that take the current state and an action as arguments and return the new state. They are responsible for updating the state based on the action’s type and payload. Reducers should not have any side effects or modify the current state; instead, they should return a new state object.

-   Slices: A Redux Slice is a collection of reducer logic and actions for a single feature of our app. The name “slice” comes from the idea that we’re splitting up the root Redux state object into multiple “slices” of slate.

### Other Libaries :

0. [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

1. [RecoilJS](https://recoiljs.org/)

2. [Jotai](https://jotai.org/)

3. [MobX](https://mobx.js.org/)

### History

Redux was begining from flux. Considered the “mother” of Redux, Meta developed Flux to overcome the limitations of the Model-View-Controller (MVC) architecture pattern.

-   Features :

    -   A central dispatcher receives actions through user interactions, triggering a flow of data.
    -   Multiple stores contain the application state.
    -   Views or React components update the changes.

-   Pros
    -   One-way and predictable data flow.
    -   Centralized Dispatcher for consistency and control.
    -   Easy Debugging.
-   Cons
    -   Involves a large amount of code-writing.
    -   Steep learning curve.
    -   Not worthwhile for small applications because of the high-cost.

### Why Use React Redux?

Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.

If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.

React Redux is the official Redux UI binding library for React. If you are using Redux and React together, you should also use React Redux to bind these two libraries.

All apps don’t need Redux. redux is not necessarily for every project. It’s important to understand the kind of application that you’re building, the kinds of problems that you need to solve it, and what tools can best solve the problems you’re facing.

### Notes - Comparisons and Considerations

Redux comes with a lot of boilerplate, and believe me many JS developers are not a big fan of this library. And if you don’t follow it properly, chances are, your application might break or behave inappropriately.

-   Developer Experience

    Redux, with its structured patterns, may have a steeper learning curve. In contrast, libraries like Zustand and MobX offer simplicity and ease of use. The React Context API, on the other hand, is easy to grasp but may lack some advanced features.

-   Scalability

    Redux’s centralized store and strict architecture make it well-suited for large and complex applications. Recoil and Zustand are suitable for various project sizes, while the React Context API might struggle to maintain scalability in larger applications.

-   Tooling and DevTools

    Redux’s DevTools extension provides powerful debugging capabilities. The Redux Toolkit further enhances this experience. Other solutions have their own tooling, but Redux’s ecosystem remains robust and well-supported.

-   Community and Ecosystem

    Redux boasts a large and active community, ensuring ongoing support and a wealth of resources. However, newer libraries like Recoil and Zustand are gaining traction, each with its growing community and ecosystem.

-   Project-specific Considerations

    Consider the size and complexity of your project, your team’s familiarity with different solutions, and your specific requirements. Each solution has its strengths, and the choice depends on the unique needs of your application.
