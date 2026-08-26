import { useEffect, useState } from "react";
import "./BasicsTask.css"
function BasicsTask(){
    function handlesForm(e){
        e.preventDefault()
    }

    function saveData(){
        localStorage.setItem("students", JSON.stringify(students))
    }
    const [students , setStudents] =useState({
        name : "Raj Patil",
        age : 22 ,
        city : "Mumbai"
    })
    const [skills , setSkills] = useState(["HTML", "CSS" , "React"])
    const [apiStudents , setApiStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error , setError] = useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> {
            setApiStudents(data)
            setLoading(false)
        })
        .catch(()=>{
            setError("Something is wrong...")
            setLoading(false)
        })
    },[])

    if(loading){return <h3>Load the Data ....Plz check your internet Connection !</h3>}
    if(error){return <h3>{error}</h3>}


    return(
        <>
           <div className="main-container">

                <div className="hero-section">
                    <h3>STUDENT DASHBOARD</h3>
                    <form onSubmit={handlesForm}>
                        <strong>Name : </strong> <input type="text" value={students.name} onChange={(e)=> setStudents({...students, name : e.target.value})} />  <br />
                        <strong>Age : </strong> <input type="number" value={students.age} onChange={(e)=> setStudents({...students, age : e.target.value})} /> <br />
                        <strong>City : </strong> <input type="text" value={students.city} onChange={(e)=> setStudents({...students, city : e.target.value})} /> <br />

                        <button onClick={saveData}>Save Students</button>
                    </form>
                </div>

                <div className="display-section">
                    <h3>STUDENT PROFILE</h3>
                    <p>
                        <strong>Name : </strong> {students.name} <br />
                        <strong>Age : </strong> {students.age} <br />
                        <strong>City : </strong> {students.city} <br />
                        <strong>Skills :</strong> {
                            skills.map((e)=>(
                                <ul key={e}>
                                    <li>{e}</li>
                                </ul>
                            ))
                        }

                        <button onClick={()=> setSkills([...skills, "JavaScript"])}>Add Javascript</button> <br />
                        <button onClick={()=> setSkills(skills.filter(s => s !== "CSS"))}>Remove Css</button>
                    </p>
                </div>

                <div className="status-section">
                        <h3>STATUS</h3>
                        <h4>
                            Age : {students.age} <br />
                            Status : {students.age > 18 ? "Adult" : "not Adult"}
                        </h4>
                </div>

                <div className="api-students">
                    <h3>API STUDENTS</h3>
                        <div className="students-card">
                            {
                                apiStudents.slice(0,5).map((e)=>(
                                    <div className="card-info" key={e.id}>
                                       <p>
                                         <strong>Name : </strong> {e.name} <br />
                                         <strong>Email : </strong> {e.email} <br />
                                         <strong>City : </strong> {e.address.city} <br />
                                       </p>
                                    </div>
                                ))
                            }
                        </div>
                </div>

           </div>
        </>
    )
}
export default BasicsTask;