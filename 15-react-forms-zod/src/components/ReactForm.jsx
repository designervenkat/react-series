import { useState } from 'react'

export default function ReactForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState({
        email: '',
        password: '',
    })
    const handleSubmit = (event) => {
        event.preventDefault()

        if (!email && !email.includes('@')) {
            setError({ ...error, email: 'Please enter a valid email' })
            return
        }
        if (!password || password.length < 4) {
            setError({ ...error, password: 'Please enter a valid password' })
            return
        }
        setDisabled(false)
        console.log('Form Submited', { email, password })
    }
    return (
        <div className="h-screen w-screen grid place-content-center gap-y-10">
            <h2 className="font-semibold text-3xl">Handling React Form !</h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-3 w-96"
            >
                <input
                    className="h-12 w-full block px-4 border border-gray-600 rounded-md"
                    type="text"
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {error.email && (
                    <p className="text-red-500 text-xs">{error.email}</p>
                )}
                <input
                    className="h-12 w-full block px-4 border border-gray-600 rounded-md"
                    type="password"
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error.password && (
                    <p className="text-red-500 text-xs">{error.password}</p>
                )}

                <button
                    disabled={disabled}
                    className={`h-12 w-full block text-white ${
                        disabled ? 'bg-gray-200' : 'bg-black'
                    }`}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
