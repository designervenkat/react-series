import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contexts/userProviderContext'

function App() {
    return (
        <UserContextProvider>
            <h2>React Context Project 02</h2>
            <Login />
            <Profile />
        </UserContextProvider>
    )
}

export default App
