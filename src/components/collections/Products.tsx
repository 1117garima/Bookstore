import SingleProduct from './SingleProduct'

export default function Products({ products }: { products: Product[] }) {
    console.log('this is a product from product page', products)

    return (
        <>
            <div className=' flex flex-col gap-x-8 gap-y-8 sm:ml-[7px] sm:grid sm:grid-cols-2 lg:ml-[10px] lg:w-[59vw] lg:grid-cols-4'>
                {products.map((product: Product) => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
