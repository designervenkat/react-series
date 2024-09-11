import './App.css'
import SampleComponent from './components/SampleComponent'
import Card from './components/Card'
import MyProvider from './context/MyContextProvider'

function App() {
    return (
        <>
            <MyProvider>
                <h2>React Context</h2>
                <SampleComponent />
                <Card />
                <Card />
            </MyProvider>
        </>
    )
}

export default App
