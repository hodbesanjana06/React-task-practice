import { useEffect, useState } from "react";
import "./ApiTask.css"


function ApiTask(){

  function saveData(){
        localStorage.setItem("user", JSON.stringify(user));     
    }

    const [user , setUser] = useState({
        name : "Sanjana", 
        city : "Pune"
    })
    const [apiUser , setApiUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [seconds , setSeconds] = useState(0)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> {
            setApiUser(data)
            setLoading(false)
        })
        .catch(()=>{
            setError("Something went wrong...")
            setLoading(false)
        })
    },[])

    useEffect(()=> {
        const timer = setInterval(()=> {
            setSeconds(prev => prev + 1)
        },1000)
        return ()=> {
            clearInterval(timer)
        }
    }, [])

    if(loading){return <h3>Load the data...</h3>}
    if(error){return <h3>{error}</h3>}

    return(
        <>
           <div className="main-section">
                <hr /><h3>USER DASHBOARD</h3><hr />

                <div className="form-section">
                  <strong>Name : </strong>  <input type="text" value={user.name} onChange={(e)=> setUser({...user ,name :  e.target.value})} /> <br />
                  <strong>City : </strong> <input type="text" value={user.city} onChange={(e)=> setUser({...user, city: e.target.value})} /> <br />
                    <h3>
                        {user.name} <br />
                        {user.city}    
                    </h3>
                    <button onClick={saveData}>Save Profile</button>
                </div>

                <div className="apiuser-section">
                    <hr /><h3>API USER</h3><hr />

                    <div className="api-users">
                        {
                        apiUser.slice(0,5).map((e)=>(
                            <div className="user-info" key={e.id}>
                                <p>
                                    <strong>Name : </strong> {e.name} <br />
                                    <strong>Email :</strong> {e.email} <br />
                                    <strong>City : </strong> {e.address.city} <br />
                                </p>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <div className="timer-section">
                    <hr /><h3>TIMER</h3> <hr />
                    <h4>Seconds {seconds}</h4>
                </div>
           </div>
        </>
    )
      
}
export default ApiTask;



// import Practice from "./Tasks/Task10 - Practice-Other/Practice";
// import ApiTask from "./Tasks/Task10 - Practice-Other/ApiTask";

// function App(){
//   return(
//     <>
//       {/* <Practice/> */}
//       <ApiTask/>
//     </>
//   )
// }
// export default App;