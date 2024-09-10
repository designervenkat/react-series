import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Products, { getAllProduct } from './components/Products/Products'
import ProductDetails from './components/Product-Detail/Product-Details'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route
                path="products"
                element={<Products />}
                loader={getAllProduct}
            />

            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    )
)

// const router = createBrowserRouter(
//   {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 path: '',
//                 element: <Home />,
//             },
//             {
//                 path: 'about',
//                 element: <About />,
//             },
//             {
//                 path: 'contact',
//                 element: <Contact />,
//             },
//         ],
//     },
// )

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
