import { useEffect, useState } from 'react'

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [name, setName] = useState('')

    // componentDidMount Alternative
    useEffect(() => {
        // logic or function / side effects
        console.log('Re-rendered')
    }) // No Dependecy array

    // useEffect(() => {
    //     // run this function / logics only once
    //     console.log('Run One Time Only')
    // }, [])

    // on First Render + whenever dependancy changes
    // componentDidUpdate Alternative
    // useEffect(() => {
    //     console.log(`The name changed! : ${name}`)

    //     // clean up functions here
    //     return () => {
    //         console.log('Unmounted')
    //     }
    // }, [name])

    useEffect(() => {
        console.log('Attached Listener')
        window.addEventListener('resize', updateWidthFn)

        // cleanup
        // return () => {
        //     console.log('Dettached Listener')
        //     window.removeEventListener('resize', updateWidthFn)
        // }
    }, [])

    const updateWidthFn = () => {
        setWindowWidth(window.innerWidth)
    }

    return (
        <div className="h-screen w-screen grid place-content-center gap-y-5">
            <h2 className="text-2xl font-mono text-gray-500">
                React useEffect
            </h2>
            <h2 className="text-2xl font-bold text-lime-200">
                The window width is : {windowWidth}
            </h2>

            <input
                type="text"
                autoComplete="hidden"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="h-12 font-medium w-full max-w-sm rounded mt-10 px-4 text-gray-400 focus:outline-none active:outline-none"
            />

            <p className="text-base text-gray-500 w-full max-w-sm text-wrap">
                {name && <span>Your Name : {name}</span>}
            </p>
        </div>
    )
}

export default App

// should display current time in format hh::mm::ss
// should update every second
// useEffect to update time
// one button to allow users pause the time and resume
// time should remain static and not changed
// time should be resumed when click on same button to continue
