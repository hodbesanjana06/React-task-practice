import { useEffect, useState } from "react";

function Second(){
    const[user , setUser] = useState([]);
    const[error , setError] = useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(()=> setError("Something is wrong ! check your internet "))
    }, [])
    return(
        <>
        <h3>User Info Using API</h3> <hr />
        {error && <p style={{color : "red"}}>{error}</p>}
        {
            user.map((i)=>(
                <div className="card" key={i.id}>
                    <h2>{i.name} : {i.email}</h2>
                </div>
            ))
        }
        
        </>
    )
}
export default Second;