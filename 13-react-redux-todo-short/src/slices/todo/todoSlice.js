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
    },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
