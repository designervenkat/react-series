import useFetch from '../hooks/useFetch'
function ProductDetail() {
    const { data, loading, error } = useFetch(
        `https://fakestoreapi.com/products/2`
    )

    console.log(data)

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            <h2>Product Detail</h2>

            {data && <div>{data.title}</div>}
        </div>
    )
}

export default ProductDetail
