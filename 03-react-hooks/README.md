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

### Simple Form State

```

const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // we can this data to server or async
        const response = await fetch('url', {
            method: 'POST',
            body: JSON.stringify({ fullName: name, password }),
        })

        const data = await response.json()

        console.log(data)
        console.log('Name :', name, 'password : ', password)
    }

    return (
        <>
            <h1>React Hooks!</h1>
            {name && password ? (
                <p>
                    Name: {name} and password: {password}{' '}
                </p>
            ) : (
                <p>Empty Value</p>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    className="h-12 w-full block px-4 py-2 my-4"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <input
                    className="h-12 w-full block px-4 py-2 my-4"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )

```

### Simple Todo APP

```

const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    const addTodo = (e) => {
        e.preventDefault() // Prevent form submission
        if (task.trim()) {
            setTodos([...todos, task])
            setTask('')
        }
    }

    return (
        <div>
            <form onSubmit={addTodo} className="flex flex-col gap-y-4 my-4">
                <input
                    type="text"
                    value={task}
                    className="h-12 w-full px-4 py-2"
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )

```
