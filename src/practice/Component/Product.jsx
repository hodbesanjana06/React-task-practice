function Product({name , price , category}){
    return(
        <>
            
            <p>
                <strong>Product Name : </strong> {name} <br />
                <strong>Price : </strong> {price} <br />
                <strong>Category : </strong> {category}
            </p> <hr />
        </>
    )
}
export default Product;
