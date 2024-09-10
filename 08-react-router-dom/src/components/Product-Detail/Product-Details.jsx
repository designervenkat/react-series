import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function ProductDetails() {
    const { productId } = useParams()
    useEffect(() => {
        // get single product by id
    })
    return <div>Product-Details {productId}</div>
}

export default ProductDetails
