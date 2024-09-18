import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
function App() {
    return (
        <div className="h-screen bg-slate-200 grid place-content-center">
            <h2 className="font-semibold text-3xl">React Todo Zustand!</h2>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App
