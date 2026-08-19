import {useEffect, useState } from "react";

function Practice(){
    const [user, setUser] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=>{
            setUser(data)
            console.log(data);
            setLoading(false)    
        })
        .catch(()=>{
            setError("SOmething Wrong ....")
            setLoading(false)
        })
    }, [])
    if(loading){
        return <h2>Loading the data</h2>
    }
    if(error){
        return <h3>{error}</h3>
    }

    return(
        <>
            {
                user.slice(0,5).map((e)=>(
                    
                        <div key={e.id}>
                            <h4>
                                Name : {e.name} <br />
                                Email : {e.email} <br />
                                City : {e.address.city} <br />

                            </h4>
                        </div>
                    
                ))
            }

        </>
    )   
}
export default Practice;












//array/object state
// const [user, setUser] = useState({
//         name : "Sanjana",
//         age : 22,
//         city : "Delhi"
//     });
//     const [skills , setSkills] = useState(["HTML", "CSS" , "React"])
//     return(
//         <>
//             <div className="main-section">
//                 <div className="hero-section">
//                     <h3>My Profile</h3> <hr />

//                     <h4>
//                         Name : {user.name} <br />
//                         Age : {user.age} <br />
//                         City : {user.city} <br />
//                     </h4>

//                     <button onClick={()=> setUser({...user, age : user.age + 1})}>Increase Age </button> <br />
//                     <button onClick={()=> setUser({...user , city : "Pune"})}>Change City</button>

                    
//                         {skills.map((e)=> (
//                             <h4>{e}</h4>
//                         ))}
//                         <button onClick={()=> setSkills([...skills, "JS"])}>Add Js</button> <br />
//                         <button onClick={()=> setSkills(skills.filter(s => s !== "CSS"))}>Remove CSS</button>
                    
//                 </div>
//             </div>
//         </>
//     )


//useEffect
// function handleForm(e){
//         e.preventDefault()
//     }

//     const [user, setUser] = useState({
//         name : "Sanjana" ,
//         age : 34, 
//         city : "Pune"
//     })
//     const [skills , setSkills] = useState(["HTML" , "CSS" , "React"])
//     const [count ,setCount] = useState(0)
//     useEffect(()=>{
//         document.title = `Count : ${count}`
//     }, [count])
//    return(
//     <>
//         <div className="main-container">
//             <h3>Smart Profile</h3>
            
//             <form onSubmit={handleForm}>
//                 <label>Name : </label>
//                 <input type="text" value={user.name} onChange={(e)=> setUser({...user, name : e.target.value})}/> <br />
                
//                 <label>Age : </label>
//                 <input type="number" value={user.age} onChange={(e)=> setUser({...user , age : e.target.value})}/> <br />

//                 <label>City : </label>
//                 <input type="text" value={user.city} onChange={(e)=> setUser({...user , city: e.target.value})} /> <br />

//                 {
//                     <h3>
//                         Name : {user.name} <br />
//                         Age : {user.age} <br />
//                         City : {user.city} <br />
//                     </h3>
//                 }
//                 <h3>SKills : {skills.map((e)=> (<h5 key={e}>{e}</h5>))}</h3>
//                 <button onClick={()=> setSkills([...skills , "Javascript"])}>Add JS</button>


//                 <h3>Count : {count}</h3>
//                 <button onClick={()=> setCount(count + 1)}> + </button> <br />
//                 <button onClick={()=> setCount(count - 1)}> - </button>

//                 <h3>Status {count > 5 ? "Active" : "Inactive"}</h3>
//             </form>
//         </div>
//     </>
//    )