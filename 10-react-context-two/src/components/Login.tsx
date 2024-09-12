import React, { useContext, useState } from 'react'
import UserContext from '../contexts/userContext'

function Login() {
    //  Regular state for inputs
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // call context updating the state of user
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password, email })
    }
    return (
        <div>
            <h3 className="my-3">Login</h3>
            <input
                type="email"
                value={email}
                className="block my-4 h-12 w-72 px-4 py-2"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter Email"
            />
            <input
                type="text"
                className="block my-4 h-12 w-72 px-4 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="enter uesrname"
            />
            <input
                type="password"
                value={password}
                className="block my-4 h-12 w-72 px-4 py-2"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter password"
            />

            <button
                className="block my-4 h-12 w-72 px-4 py-2"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}

export default Login
