import { Link, useLoaderData } from 'react-router-dom'

function Products() {
    const products = useLoaderData()
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data))
    // }, [])
    return (
        <div className="grid grid-cols-3 gap-4 max-w-screen-lg mx-auto my-10">
            {products &&
                products.map((item) => (
                    <Link
                        to={`${item.id}`}
                        className="w-[300px] rounded-md border"
                        key={item.image}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-[200px] w-full rounded-md object-contain"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">
                                {item.title} || {item.price}
                            </h1>
                            <p className="mt-3 text-sm text-gray-600 truncate">
                                {item.description}
                            </p>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                View Details
                            </button>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default Products

export const getAllProduct = async () => {
    const respone = await fetch('https://fakestoreapi.com/products')
    return respone.json()
}
