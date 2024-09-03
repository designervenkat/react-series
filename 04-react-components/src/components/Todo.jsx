import { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState('')

    const addTodo = (e) => {
        e.preventDefault() // prevent submitting

        if (input.trim()) {
            // remove unecessary white spacing and empty values
            setTodo([...todo, input]) // ... using spread operator adding new values

            setInput('') // reseting the input field
        }
    }

    return (
        <div>
            <h2>Todo App </h2>
            <form onSubmit={addTodo} className="flex flex-col gap-y-3 mt-3">
                <input
                    className="h-12 w-full block px-4"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your task"
                />
                <button className="h-12 w-full block" type="submit">
                    Save
                </button>
            </form>

            <ul className="my-6 flex flex-col gap-y-5">
                {todo.length ? (
                    todo.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <h2>No task today</h2>
                )}
            </ul>
        </div>
    )
}

export default Todo
