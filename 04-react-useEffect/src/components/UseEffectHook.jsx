import { useState, useEffect } from 'react'

function UseEffectHook() {
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [products, setProducts] = useState([])
    const [userId, setUserId] = useState(3)

    // useEffect(() => {
    //     console.log('Component Mounted', Math.random())
    // })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [userId])

    return (
        <div className="grid place-content-center h-screen w-full gap-y-4">
            {products.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
        </div>
    )
}

export default UseEffectHook
