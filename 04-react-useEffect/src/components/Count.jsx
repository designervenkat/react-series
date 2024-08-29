import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h3>React Hooks Count!</h3>
            <p>The count is {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Count
