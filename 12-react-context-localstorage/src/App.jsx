import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import './App.css'
import { TodoForm, TodoItems } from './components/index'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        // cannot send directly todo string because it is an object
        // if you send directly it will replace everything with new one
        // access the all todos first and then add the new todo to it
        // use spread operator to send the rest of the properties
        // we need to send an object with id and rest of the properties
        // Fixed the code
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }
    const updateTodo = (id, todo) => {
        // need to check if id matches with the current edited id
        // if it matches then update the todo
        // if it does not match then return the previous todo
        // map will return a new array
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
        )
    }
    const deleteTodo = (id) => {
        // need to check if id matches with the current edited id
        // if it matches then update the todo
        // if it does not match then return the previous todo
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
    const toggleCompleted = (id) => {
        //console.log(id);
        // need to check if id matches with the current edited id
        // need to acces the one property of the current todo
        // modifiy the one property of the todo is completed
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
            )
        )
    }

    // on load get all todos
    useEffect(() => {
        // localStorage - alternative database
        const todos = JSON.parse(localStorage.getItem('todos'))
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    // // store todos in localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
        >
            <div className="bg-slate-950 h-screen w-screen py-12">
                <div className="w-full max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Create your Todos
                    </h1>

                    <div className="mb-4">
                        {/* Todo form goes here */}
                        {/* Add Todo Form Component */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop and Add TodoItem here */}
                        {/* Map Todos */}

                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItems todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App
