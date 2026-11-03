import { useState } from "react";
import "./Index.css"

function Index(){
    const[name , setName] = useState("")
    const[age , setAge] = useState("")
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")
    const[gender , setGender] = useState("")
    const[skills , setSkills] = useState([]);
    const[course , setCourse] = useState("")
    const[aboutMe , setAboutMe] = useState("")
    const[dob , setDOB] = useState("")

    const[error , setError] = useState({})
    function reset(){
        setName("")
        setAge("")
        setEmail("")
        setPassword("")
        setGender("")
        setSkills([])
        setCourse("")
        setAboutMe("")
        setDOB("")
        setError({})
    }
    function handleSubmit(e){
        e.preventDefault();

        let newError ={}

        if(!name.trim()){
            newError.name = "Name is Required"
        }else if(name.length < 3){
            newError.name = "Must Containe At least 3 character"
        }

        if(!age){
            newError.age = "age is required"
        }else if(Number(age) < 18){
            newError.age = "Age is required and must be at least 18."
        }

        if(!email.trim()){
            newError.email="Email is required"
        }else if(!email.includes('@')){
            newError.email ="Not Valid EMail"
        }

        if(password.length < 8){
            newError.password= "Password must contain at least 8 characters."
        }

        if(aboutMe.trim().length < 10){
            newError.aboutMe= "About Me must contain at least 10 characters."
        }
        if(!dob){
            newError.dob = "- Date of birth must be selected."
        }
        if(!gender){
            newError.gender = "please select your gender"
        }
        if(skills.length ===0){
            newError.skills = "select at least one skill"
        }
        if(!course){
            newError.course = "select a course"
        }


        setError(newError);

        if(Object.keys(newError).length === 0){
            alert("Form Submittes");
            console.log({name , age , email , password , gender , skills , course, dob , aboutMe});
            
        }
    }

    function handleSkills(e){
        const s = e.target.value;
        if(e.target.checked){
            setSkills([...skills , s])
        }else{
            setSkills(skills.filter((i)=> i !== s))
        }
    }
    return(
        <>
            <h3>Form Example</h3>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Full Name : </label> <br />
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" /> <br /> <br />
                    {error.name && <p style={{color : "red"}}>{error.name}</p>} <br />

                    <label>Age : </label> <br />
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} placeholder="Enter Age" /> <br /> <br />
                    {error.age && <p style={{color : "red"}}>{error.age}</p>}


                    <label>Email : </label> <br />
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Mail"/> <br /> <br />
                    {error.email && <p style={{color : "red"}}>{error.email}</p>}
                    
                    <label>Password : </label> <br />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" /> <br /> <br />
                    {error.password && <p style={{color : "red"}}>{error.password}</p>}

                    <label>Gender : </label> <br />
                    <input type="radio" name="gender" checked={gender === "Male"} value="Male" onChange={(e)=> setGender(e.target.value)} /> Male
                    <input type="radio" name="gender" checked={gender === "Female"} value="Female" onChange={(e)=> setGender(e.target.value)} /> Female <br /><br />
                    {error.gender && <p style={{color : "red"}}>{error.gender}</p>}
                    

                    <label>Select Skills : </label> <br />
                    <input type="checkbox" value="HTML" onChange={handleSkills} />HTML <br />
                    <input type="checkbox" value="React" onChange={handleSkills} />React<br />
                    <input type="checkbox" value="JS" onChange={handleSkills} />JS<br />
                    <input type="checkbox" value="CSS" onChange={handleSkills} />CSS<br /> <br />
                    {error.skills && <p style={{color : "red"}}>{error.skills}</p>}

                    <label>Select Course : </label>
                    <select value={course} onChange={(e)=> setCourse(e.target.value)}>
                        <option value="">Select </option>
                        <option value="React Development">React Development</option>    
                        <option value="Full Stack Development">Full Stack Development</option>    
                        <option value="UI/UX Design">UI/UX Design</option>    

                    </select> <br />
                    {error.course && <p style={{color : "red"}}>{error.course}</p>}



                    <label>About me: </label> <br />
                    <textarea value={aboutMe} onChange={(e)=> setAboutMe(e.target.value)} ></textarea> <br /><br />
                    {error.aboutMe && <p style={{color : "red"}}>{error.aboutMe}</p>}
                    
                    
                    <label>Date of Birth : </label> <br />
                    <input type="date" value={dob} onChange={(e)=> setDOB(e.target.value)} /> <br /> <br />
                    {error.dob && <p style={{color : "red"}}>{error.dob}</p>}

                    <button type="submit">Submit</button>
                    <button type="button" onClick={reset}>Reset</button>
                </form>


                <div className="showInfo">
                    <h4>
                        Name : {name} <br />
                        Age : {age} <br />
                        Email : {email} <br />
                        Password : {"*".repeat(password.length)} <br />
                        Gender : {gender} <br />
                        Skills : {skills.join(", ")} <br />
                        course : {course} <br />
                        About Me : {aboutMe} <br />
                        DOB : {dob} <br />
                    </h4>
                </div>
            </div>
        </>
    )
}
export default Index;