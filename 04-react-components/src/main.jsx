import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import CountClass from './components/CountClass.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        {/* uncomment this line to run app component */}
        {/* <CountClass /> comment this line to run app component */}
    </StrictMode>
)
