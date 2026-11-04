function Product({qty , setQty}){

    const Product = [
        {
            name : "Laptop",
            price : "$200"
        },
        {
            name : "Laptop",
            price : "$200"
        },
        {
            name : "Laptop",
            price : "$200"
        }
    ]

    return(
        <>
            <div className="product-card">
                {
                    Product.map((s , index)=> (
                        <div key={index}>
                            <h2>
                                {s.name} <br />
                                {s.price}

                            </h2>
                            <button onClick={()=> setQty(qty + 1)}>Add to Card</button>
                        </div>
                    ))
                }
            </div>

        </>
    )
}
export default Product;
