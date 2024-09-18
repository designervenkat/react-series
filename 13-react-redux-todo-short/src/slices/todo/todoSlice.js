import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1,
            text: ' Todo msg',
        },
    ],
}

export const todoSlice = createSlice({
    // we need three things (state) : name, initialState, reducer (functions)
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload
            const existingTodo = state.todos.find((todo) => todo.id === id)
            if (existingTodo) {
                existingTodo.text = text
            }
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload
            const todoIndex = state.todos.findIndex((todo) => todo.id === id)
            if (todoIndex !== -1) {
                state.todos[todoIndex].text = newText
            }
        },
    },
})

export const { addTodo, removeTodo, editTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
