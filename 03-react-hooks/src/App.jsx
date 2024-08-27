import './App.css'
import { useState } from 'react'
function App() {
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
}

export default App
