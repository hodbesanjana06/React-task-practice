import { useEffect, useState } from "react";
import "./RecipeFinder.css";

function RecipeFinder() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [selectedRecipe, setSelectedRecipe] = useState(null);


    useEffect(() => {

        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((result) => {
                setData(result.recipes);
                setLoading(false);
            })
            .catch(() => {
                setError("Something Went Wrong");
                setLoading(false);
            });

    }, []);



    const filterRecipe = data.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
    );



    if(loading){
        return <h2>Loading...</h2>
    }


    if(error){
        return <h2>{error}</h2>
    }



    return (

        <div className="container">


            <div className="head-part">
                <h2>🍳 Recipe Finder</h2>
                <h3>Find Delicious Recipes Instantly</h3>
                <hr/>
            </div>



            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search recipe..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </div>





            <div className="show-data">


            {
                filterRecipe.slice(0,5).map((r)=>(


                    <div className="recipe-card" key={r.id}>


                        <img src={r.image} alt={r.name}/>


                        <h3>{r.name}</h3>


                        <p>{r.cuisine}</p>


                        <p>
                            ⏱ {r.cookTimeMinutes} Minutes
                        </p>


                        <button
                            onClick={()=>setSelectedRecipe(r)}
                        >
                            View Details
                        </button>


                    </div>


                ))
            }


            </div>






            {
                selectedRecipe && (

                <div className="detail-card">


                    <button 
                        className="close-btn"
                        onClick={()=>setSelectedRecipe(null)}
                    >
                        ❌ Close
                    </button>


                    <h2>
                        {selectedRecipe.name}
                    </h2>


                    <img 
                        src={selectedRecipe.image}
                        alt={selectedRecipe.name}
                    />



                    <p>
                        <b>Cuisine:</b> {selectedRecipe.cuisine}
                    </p>


                    <p>
                        <b>Difficulty:</b> {selectedRecipe.difficulty}
                    </p>


                    <p>
                        <b>Rating:</b> ⭐ {selectedRecipe.rating}
                    </p>


                    <p>
                        <b>Calories:</b> {selectedRecipe.caloriesPerServing} kcal
                    </p>



                    <h3>Ingredients</h3>

                    <ul>

                    {
                        selectedRecipe.ingredients.map((item,index)=>(
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }

                    </ul>



                    <h3>Instructions</h3>

                    <ol>

                    {
                        selectedRecipe.instructions.map((step,index)=>(
                            <li key={index}>
                                {step}
                            </li>
                        ))
                    }

                    </ol>


                </div>

                )

            }



        </div>

    )
}


export default RecipeFinder;