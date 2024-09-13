import { ThemeProvider } from './context/theme'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'
import { useEffect, useState } from 'react'
import Toggle from './components/Toggle'

function App() {
    const [themeMode, setThemeMode] = useState('light')

    const lightMode = () => {
        setThemeMode('light')
    }

    const darkMode = () => {
        setThemeMode('dark')
    }

    // Theme Change Function

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
            <div className="w-full max-w-screen-md mx-auto">
                <Header />
                <h2 className="text-2xl">React Custom Hook and Context API</h2>
                <Card />
                <Toggle />
            </div>
        </ThemeProvider>
    )
}

export default App
