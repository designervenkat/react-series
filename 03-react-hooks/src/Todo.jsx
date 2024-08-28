import { useState } from 'react'

function Todo() {
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
}

export default Todo
