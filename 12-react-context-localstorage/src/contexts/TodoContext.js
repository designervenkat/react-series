/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Learn React',
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
})

export const TodoProvider = TodoContext.Provider

// custom hook
export default function useTodo() {
    return useContext(TodoContext)
}
