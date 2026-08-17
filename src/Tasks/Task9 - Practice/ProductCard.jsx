import "./productCard.css"
import { useState } from "react";

function ProductCard({products}){

    const [category , setCategory] = useState("All")
    const filterproduct = category === "All" ? products : products.filter(p => p.category === category)
    return(
        <>
            <div className="product-container">
                <div className="head-section">
                    <h3>PRODUCT DASHBOARD</h3>
                    <h4>Browse products by category</h4> <hr />

                    <label>Filter</label>
                    <button onClick={()=> setCategory("All")}>ALL</button>
                     
                    <button onClick={()=> setCategory("Electronics")}>Electronics</button>
                    <button onClick={()=> setCategory("Clothing")}>Clothing</button>
                </div>
                {
                    filterproduct.map((e)=>(
                        <>
                            <div className="product-card" key={e.id}>
                                <h4>{e.name}</h4>
                                <p>
                                    {e.category} <br />
                                    {e.brand} <br />
                                    {e.price} <br />
                                    <button>View Product</button>
                                </p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}
export default ProductCard;