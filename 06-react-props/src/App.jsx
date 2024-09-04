import './App.css'
import { Card } from './components/Card'
import Login from './components/Login'

function App() {
    return (
        <div>
            <h2 className="text-3xl my-6">React Props</h2>

            <div className="grid grid-cols-2 place-content-center gap-4">
                <Card title="Macbook Air" price="120$" />
                <Card title="Macbook Pro" price="550$" />
                <Card title="Macbook Studio" price="420$" />
            </div>

            <div className="my-10">
                <Login password="1-password" />
            </div>
        </div>
    )
}

export default App

// Assignment Project

// step-one - using the useState hook initiate the empty state for products
// step-two - using useEffect - fetch products from api https://fakestoreapi.com/products
// step-three - update the state with new response from API {products}
// step-four - create new card component which accept props img, price, title, desc
// step-five - using map function loop the products and pass all props to cards component
// step-six - update the card component with variables
