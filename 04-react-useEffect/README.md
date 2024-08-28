# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### useEffect

The useEffect hook in React allows you to perform side effects in your components. These side effects can include tasks like fetching data, directly updating the DOM, or setting timers. Here are three examples of how you can use useEffect:

#### Component Mounting Phase

The mounting phase refers to the period when a component is being created and inserted into the DOM.

During this phase, several lifecycle methods are invoked by React to enable the developer to configure the component, set up any necessary state or event listeners, and perform other initialization tasks.

The mounting phase has three main lifecycle methods that are called in order:

#### LifeCycle Method

componentDidMount, componentDidUpdate, and componentWillUnmount

```javascript
class App extends React.Component {
    componentDidMount() {
        console.log('Component has mounted!')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component updated:', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('Component will unmount!')
    }

    render() {
        return <h1>Hello World</h1>
    }
}
```

#### Cleanup

##### Memory Leaks:

-   When you create resources (e.g., event listeners, timers, or subscriptions) in your code, they occupy memory.
-   If you don’t clean them up properly, they can accumulate over time and cause memory leaks.
-   For example, if you forget to remove an event listener when a component unmounts, it will continue to consume memory even after the component is no longer needed.

##### Preventing Unexpected Behavior:

-   Resources left uncleared can lead to unexpected behavior.
-   Imagine a scenario where a component sets an interval timer to update its state. If the component unmounts without clearing the interval, it will continue running, causing issues.

##### Network Requests and Subscriptions:

-   When fetching data from an API or subscribing to real-time updates, you need to clean up those subscriptions.
-   Otherwise, you might receive data even after the component is no longer visible or needed.

##### Performance Optimization:

-   Proper cleanup ensures that your application performs efficiently.
-   By removing unnecessary resources, you free up memory and reduce the load on the browser or server.

##### Example Code for clean up

```javascript
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
}

useEffect(() => {
    // console.log("Attach Listener")
    window.addEventListener('resize', updateWindowWidth)

    return () => {
        // console.log("Detach Listener")
        // when component unmounts, this cleanup code runs...
        window.removeEventListener('resize', updateWindowWidth)
    }
}, [])

return <>{windowWidth}</>
```
