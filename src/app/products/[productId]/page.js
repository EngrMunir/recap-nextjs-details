
const ProductDetails = async({ params, searchParams }) => {
    const productId   = await params.productId;
    console.log(searchParams);
    console.log(productId);

    return (
        <div>
            <h1 className='text-4xl text-center'>
                Product Details {productId}
            </h1>
        </div>
    );
};

export default ProductDetails;