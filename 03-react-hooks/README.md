# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Button Component

```
import './App.css'
import Button from './Button'
import { useState } from 'react'
function App() {
    let [count, setCount] = useState(0)

    // function to increase count
    const handleClick = () => {
        setCount(count++)
    }

    return (
        <>
            <h1>React Hooks!</h1>
            <br />
            <Button count={count} onClick={handleClick} /> <br />
            <br />
            <Button count={count} onClick={handleClick} /> <br />
            <br />
            <Button count={count} onClick={handleClick} />
        </>
    )
}

export default App


```

### Condition Rendering Example

```

const [isDarkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!isDarkMode)
    }

    return (
        <>
            <h1 style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
                React Hooks!
            </h1>

            <button
                onClick={toggleTheme}
                style={{
                    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#000000',
                }}
            >
                Toggle to {isDarkMode ? 'light' : 'black'} mode
            </button>
        </>
    )


```
