import { useState } from 'react'
import useTodo from '../contexts/TodoContext'
import { Pencil, Save, Trash2 } from 'lucide-react'

function TodoItems({ todo }) {
    const [isToggle, setToggle] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, deleteTodo, toggleCompleted } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setToggle(false)
    }

    const handleToggle = () => {
        toggleCompleted(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-sm px-3 py-1.5 gap-x-3 h-16 items-center justify-center duration-300  text-black ${
                todo.completed ? 'bg-green-200' : 'bg-slate-200'
            }`}
        >
            {/* Checkbox */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={handleToggle}
            />
            {/* Todo Input to update */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-sm h-16 ${
                    isToggle ? 'bg-red-600 px-2' : 'border-transparent'
                } ${todo.completed ? 'line-through' : ''}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isToggle}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-slate-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return

                    if (isToggle) {
                        editTodo()
                    } else setToggle((prev) => !prev)
                }}
                disabled={todo.completed}
            >
                {isToggle ? '🛟' : '✏️'}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                🗑️
            </button>
        </div>
    )
}

export default TodoItems
