import toast, { Toaster } from 'react-hot-toast'
import { useCallback, useEffect, useRef, useState } from 'react'
function App() {
    const copyToClipboard = useRef(null)

    // setting states
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const generatePassword = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if (numberAllowed) {
            str += '0123456789'
        }

        if (charAllowed) {
            str += '!@#$%^&*'
        }

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str.length + 1)
            pass += str[index]
        }

        setPassword(pass)
    }, [length, numberAllowed, charAllowed])

    useEffect(() => {
        generatePassword()
    }, [length, numberAllowed, charAllowed, generatePassword])

    const handleCopy = useCallback(() => {
        copyToClipboard.current?.select()
        copyToClipboard.current?.setSelectionRange(0, 10)
        window.navigator.clipboard.writeText(password)
        toast.success('Copied')
    }, [password])

    return (
        <div className="h-screen w-screen bg-slate-900 text-slate-200 grid place-content-center">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex flex-col w-[720px] gap-y-10 justify-center items-center">
                <h1 className="text-xl font-bold">Password Generator</h1>

                <div className="flex my-5 w-[480px]">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        className="bg-slate-700 w-full h-12 px-5 block py-2 font-bold text-gray-300 tracking-wide border-2 border-gray-600"
                        placeholder="password"
                        ref={copyToClipboard}
                    />
                    <button
                        onClick={handleCopy}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold h-12 px-5 block py-2 rounded-none"
                    >
                        Copy
                    </button>
                </div>

                <div className="flex items-center justify-between gap-x-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min={8}
                            max={20}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label htmlFor="numberInput">Length {length}</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={numberAllowed}
                            onChange={() => setNumberAllowed((prev) => !prev)}
                        />
                        <label htmlFor="numberInput">Add Numbers</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                        <label htmlFor="characterInput">Add Characters</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
