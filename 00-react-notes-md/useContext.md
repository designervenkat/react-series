### Introduction

-   One of the major advantages of using React is you can break your application into smaller components (as per the need) for better reusability & maintainability of code.

-   And, as the size of the project increases, these components will likely to grow in numbers.

-   Now, let’s assume if a user is interacting with one component somewhere on the UI and that information or input is required somewhere else inside a different component. What we can do?

-   We can pass a prop to that component. Then, what is the problem?

-   Let’s assume you have 10 components in your component hierarchy and the very first component updates something which is required by the last component (10th one).

-   In that case, you have to pass the prop down the whole hierarchy so that it is available for the 10th component. This is where we can slow down our application and cause development issues.

-   This is what we call “prop-drilling.” This can slow down your development as the size of your application grows (assuming the number of components also grows).

-   This is one of the main reason why Context API comes into play.

### Context API

-   React’s Context API is a powerful feature for managing state and passing data between your components tree effectively without having to prop-drill from parent to child manually.

-   Generally, we create these contexts to store information which is labelled as “global” which are required at more than 1 place.

-   Introduced in React 16.3, it provides a way to share values like user authentication, themes, or any other state across your entire app.

### Why Use React Context API?

-   React Context API offers several advantages over traditional prop drilling, making it a powerful tool for managing global state in large React applications. Some key benefits of using React Context API include:

-   Simplified state management: Context API allows for centralizing state management and eliminates the need for passing props through multiple levels of components, making code cleaner and more maintainable.

-   Improved performance: Context API avoids unnecessary re-renders by only updating components that depend on the changed context values, resulting in better performance compared to prop drilling.

-   Scalability: Context API is highly scalable and can be used to manage complex global state in large applications, making it a preferred choice for managing state in complex React projects.

### How to Create and Use Context in React

Creating and using context in React is easy and straightforward. Here are the steps to create and use context in your React application:

1. `Create a context` : To create a context object, use the React.createContext() function, which returns a context object with a Provider and a Consumer component.

```js
import React from 'react'

// Create the context
const UserContext = React.createContext()
export default UserContext

OR

import React, { createContext, useState } from 'react'

// Create the context
const ThemeContext = createContext()
```

2. `Set up the Provider component`:

    - This will wrap the components that need access to the context.
    - Define state (if needed): Use useState to manage the state that you want to share across components.
    - Provide the context value: Use the Provider component created by the context and pass the value that will be accessible to consuming components.

```js
import React from 'react'
import UserContext from './UserContext'

// Create a Provider Component
const MyProvider = ({ children }) => {
    const value = { message: 'Hello from Context!' }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default MyProvider
```

3. Consume the context using `useContext()` hook: The Consumer component is used to access the context data in any child component. It takes a function as its child, which receives the context data as an argument.

```js
// using through useContext Hook

import React, { useContext } from 'react'
import UserContext from './UserContext'

const MyComponent = () => {
    const context = useContext(UserContext)

    return (
        <div>
            <h1>{context.message}</h1>
        </div>
    )
}

export default MyComponent
```

```js
// using directly through Provider
import React from 'react'
import UserContext from './UserContext'

const SomeComponent = () => {
    return (
        <UserContext.Consumer>
            {(context) => (
                <div>
                    <h1>{context.message}</h1>
                </div>
            )}
        </UserContext.Consumer>
    )
}

export default MyComponent
```

4. Use the useContext Hook: In addition to the Consumer component, you can also use the useContext hook to access the context data in a functional component directly.

```js
ADD CODE
```

> Note: Provider and Consumer Components in Context API The Provider and Consumer components are the two main components used in React Context API.

> The Provider component is used to wrap the parent component(s) that will provide the context data. It takes a value prop, which is used to pass the data to the child components.

### When and how to use Context ?

-   If the state updates are frequent then you should avoid using Context and look for other solutions like React Redux, MobX-State-Tree or my favourite Zustand.

-   But, if you have a state which remains same for most of the times like theme, preferred language or authentication information then React Context is a good solution.

-   But, if you are still inclined towards using the Context API, then try to split the bigger contexts into the smaller multiple contexts. This will lower down the unnecessary re rendering till some extent and you will be able to use React context which can be really good for smaller and simpler applications.

#### TO BE CONTINUE ...
