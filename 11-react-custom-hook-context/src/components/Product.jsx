import useFetch from '../hooks/useFetch'

function Product() {
    const { data, loading, error } = useFetch(
        'https://fakestoreapi.com/products'
    )

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
    )
}

export default Product
