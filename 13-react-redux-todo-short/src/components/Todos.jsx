import { Trash2, Save, Edit2 } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../slices/todo/todoSlice'
import { useState } from 'react'
function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const startEdit = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const saveEdit = (id) => {
        dispatch(
            editTodo({
                id,
                text: editText,
            })
        )
        setEditId(null)
        setEditText('')
    }

    return (
        <div>
            <ul className="list-none">
                {todos &&
                    todos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-600 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            {editId === todo.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) =>
                                        setEditText(e.target.value)
                                    }
                                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            ) : (
                                <div className="text-white">{todo.text}</div>
                            )}
                            <div className="flex space-x-2">
                                {editId === todo.id ? (
                                    <button
                                        onClick={() => saveEdit(todo.id)}
                                        className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                    >
                                        <Save className="w-4" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => startEdit(todo)}
                                        className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                                    >
                                        <Edit2 className="w-4" />
                                    </button>
                                )}
                                <button
                                    onClick={() =>
                                        dispatch(removeTodo(todo.id))
                                    }
                                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                >
                                    <Trash2 className="w-4" />
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Todos
