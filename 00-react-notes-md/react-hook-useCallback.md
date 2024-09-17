### What is useCallback?

#### The useCallback hook returns a memoized version of the callback function that only changes if one of its dependencies has changed. This optimization helps to prevent unnecessary renders and calculations, especially in components that rely on referential equality to prevent unnecessary updates.

#### It allows you to memoize callback functions, thereby improving the performance of your application, especially in scenarios involving frequent re-renders.

#### when a component re-renders, every function inside of the component is recreated and therefore these functions’ references change between renders.

#### useCallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.

```js
const memoized = useCallback(
    () => {
        // the callback function to be memoized
    },
    // dependencies array
    []
)
```

### Why Do We Use useCallback?

#### useCallback is mainly used for performance optimization. It's particularly useful in the following scenarios:

-   #### Passing Callbacks to Optimized Child Components: When you pass callbacks to child components that are optimized with React.memo, using useCallback ensures that the child component does not re-render unnecessarily if the function reference hasn’t changed.

-   #### Preventing Unnecessary Calculations: If your callback function performs expensive calculations, useCallback ensures that this function is not recreated unless its dependencies change.

### What if You Don’t Use useCallback?

#### If `useCallback` is not used in the above scenario, the `increment` function would be recreated on every render of the `ParentComponent`. As a result, the `ChildComponent` would also re-render every time, even if its props haven't changed, leading to inefficient performance.

### Use Cases

1. ### Lets take a look at a very simple Counter React component:

```js
import React, { useState, useCallback } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const incrementOtherCounter = () => {
        setCount2(otherCounter + 1)
    }

    return (
        <>
            Count: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>
                incrementOtherCounter
            </button>
        </>
    )
}
```

#### This is pretty simple, we have two state variables that are holding numbers and three functions to change our state. However, the problem here is that every time the Counter component is re-rendered, all three functions, increment , decrement , and incrementOtherCounter are all recreated!

> We can see that by using a Set and adding the function to the Set each time the function runs. Why Set? It only stores unique elements, or in our case, uniquely instantiated functions.

```js
import React, { useState, useCallback } from 'react'

const functionsSet = Set()

const Counter = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const incrementOtherCounter = () => {
        setCount2(otherCounter + 1)
    }

    functionsSet.add(increment)
    functionsSet.add(decrement)
    functionsSet.add(incrementOtherCounter)

    console.log(functionsSet)

    return (
        <>
            Count: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>
                incrementOtherCounter
            </button>
        </>
    )
}
```

#### Now, every time we click a button we should see the functionsSet being logged, and increasing by three each time! This shows us that every time the component is re-rendered, entirely new instances of functions are created, an necessary operation.

#### At its core, this problem is due to the how Javascript determines function equality.

### Function Equality in Javascript

#### Lets look at some example code where we have a factory function that’s returning a function:

```js
function factory() {
    return (a, b) => a * b
}

const function1 = factory()
const function2 = factory()

function1(1, 2) // => 2
function2(1, 2) // => 2

function1 === function2 // => false
function1 === function1 // => true
```

#### Here, we create function1 and function2 using the factory . Functions in Javascript are first-class citizens, meaning that they’re represented as regular objects. The function object can be returned by other functions (like factory), compared, and or anything a normal object can do.

#### You can see that although function1 and function2 both come from the same place and do the same thing, they’re inherently different objects, so they aren’t equal. Any Javascript function is only equal to itself.

#### Going back to React, when a component re-renders, every function inside of the component is recreated. useCallback makes it so we can memoize (or cache) the function instance between renders. This means that instead of recreating the function object, we can use the same function object between renders.

#### Lets update our counter increment/decrement functions to use useCallback

```js
const increment = useCallback(() => {
    setCount(count + 1)
}, [count])

const decrement = useCallback(() => {
    setCount(count - 1)
}, [count])

const incrementOtherCounter = useCallback(() => {
    setCount2(count2 + 1)
}, [count2])
```

#### Notice how we use a dependency array as one of the function parameters of useCallback . As long as the values in the dependency array are the same between renders, React will continue using the memoized (or cached) version of the function. If the values in the dependency array change between renders, React will recreate the function.

#### In this case, our logs will now reflect this. When we click the button to run incrementOtherCounter , our functionsSet will only increase by one, since only count2 is being updated, so only one function is being recreated (incrementOtherCounter ). We know this because count2 is only in the dependency array of incrementOtherCounter and not either of the other functions.

#### When we click either the + or - buttons, functionsSet will increase by two, since we’re recreating both the increment and decrement functions.

#### Although this is a very simple example, we can see how we can use useCallback to optimize components that have complex or resource intensive functions.

2. ### Preventing Unnecessary Re-renders:

#### Consider a scenario where a parent component renders a child component with a callback prop. Without useCallback, the callback is recreated on every render, causing unnecessary re-renders of the child component.

```js
// Without useCallback
const ParentComponent = () => {
    const handleClick = () => {
        // Handle click logic
    }
    return <ChildComponent onClick={handleClick} />
}
```

#### With `useCallback`:

```js
// With useCallback
const ParentComponent = () => {
    const handleClick = useCallback(() => {
        // Handle click logic
    }, [])
    return <ChildComponent onClick={handleClick} />
}
```

3. ### Optimizing Child Component Memoization:

#### In scenarios where a child component uses a callback prop, useCallback can optimize the child component's memoization:

```js
const ChildComponent = React.memo(({ onClick }) => {
    // Component logic here
    return <button onClick={onClick}>Click me</button>
})
```

#### By wrapping the callback with useCallback, you ensure that the function remains constant between renders, improving the effectiveness of React.memo.

### Best Practices

1. ### Identify Callbacks with Dependencies:

#### Use useCallback when dealing with callback functions that have dependencies, preventing unnecessary recreations.

2. ### Optimize Child Components:

#### Apply useCallback to memoize callback functions passed as props to child components, preventing unnecessary renders.

3. ### Use Memoization Wisely:

#### While useCallback is powerful, don't overuse it. Only memoize functions that genuinely benefit from memoization to avoid unnecessary complexity.

### Conclusion

#### `useCallback` is a powerful hook in React for optimizing performance by memoizing callback functions. It's particularly useful in components that pass callbacks to child components or rely on referential equality for rendering decisions. While not always necessary, `useCallback` can be an essential tool in your React optimization toolkit for specific use cases. Remember, however, that overuse of `useCallback` can lead to code complexity and maintenance challenges, so use it judiciously.
