import { Trash2 } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../slices/todo/todoSlice'
function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <div>
            <ul className="list-none">
                {todos &&
                    todos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-600 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            <div className="text-white">{todo.text}</div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <Trash2 className="w-4" />
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Todos
