import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
    return (
        <div className="h-screen w-screen bg-slate-950 grid place-content-center">
            <AddTodo />
            <Todos />
        </div>
    )
}

export default App
