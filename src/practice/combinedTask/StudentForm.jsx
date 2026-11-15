import { useState } from "react";

function StudentForm({addstudent}){

    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [gender , setGender] = useState("")
    const [skills , setSkills] = useState([])
    const [course , setCourse] = useState("")
    const [dob , setDOB] = useState("")
    const [about , setAbout] = useState("")

    const[error , setError] = useState({})


    function handleSubmit(e){
        e.preventDefault()

        const newError = {}

        if(!name.trim()){
            newError.name  = "Name is required"
        }else if(name.length < 3){
            newError.name = "Minimun 3 characters required"
        }


        if(!age || age < 18){
            newError.age = "Age must be at least 18."
        }

        if(!email.trim()){
            newError.email = "Email required !"
        }
        if(password.length < 8){
            newError.password = "Password must have at least 8 characters."
        }

        if(!gender){
            newError.gender = "Gender must be selected."
        }
        if(skills.length < 1){
            newError.skills = "At least one skill must be selected."
        }
        if(!course.trim()){
            newError.course= "Course must be selected."
        }
        if(!dob){
            newError.dob = "Date of birth is required."
        }
        if(about.length < 10 ){
            newError.about = "contain at least 10 characters."
        }

        setError(newError)


         if(Object.keys(newError).length === 0){
            const studentData = {
                name , age , email , gender , skills , course , dob , about
            }
            addstudent(studentData)
            alert("Form Submitted Sucessfully !")
        }
    }
    function handleSkills(e){
        const s = e.target.value;

        if(e.target.checked){
            setSkills([...skills , s])
        }else{
            setSkills(skills.filter(skill => skill !== s))
        }
    }

    return (
    <div className="form-container">

        <h2 className="form-title">Student Registration Form</h2>

        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label><b>Full Name:</b></label>
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
                {error.name && <p className="error">{error.name}</p>}
            </div>

            <div className="form-group">
                <label><b>Age:</b></label>
                <input type="number" value={age}
                    onChange={(e) => setAge(e.target.value)} />
                {error.age && <p className="error">{error.age}</p>}
            </div>

            <div className="form-group">
                <label><b>Email:</b></label>
                <input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                {error.email && <p className="error">{error.email}</p>}
            </div>

            <div className="form-group">
                <label><b>Password:</b></label>
                <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                {error.password && <p className="error">{error.password}</p>}
            </div>

            <div className="form-group">
                <label><b>Gender:</b></label>
                <div className="option-group">
                    <label>
                        <input type="radio" name="gender" value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGender(e.target.value)} />
                        Male
                    </label>

                    <label>
                        <input type="radio" name="gender" value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setGender(e.target.value)} />
                        Female
                    </label>
                </div>
                {error.gender && <p className="error">{error.gender}</p>}
            </div>

            <div className="form-group">
                <label><b>Skills:</b></label>
                <div className="option-group">
                    {["JS", "HTML", "React", "Cyber"].map(skill => (
                        <label key={skill}>
                            <input type="checkbox" value={skill}
                                checked={skills.includes(skill)}
                                onChange={handleSkills} />
                            {skill}
                        </label>
                    ))}
                </div>
                {error.skills && <p className="error">{error.skills}</p>}
            </div>

            <div className="form-group">
                <label><b>Course:</b></label>
                <select value={course}
                    onChange={(e) => setCourse(e.target.value)}>
                    <option value="">Select Course</option>
                    <option value="React Development">React Development</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                </select>
                {error.course && <p className="error">{error.course}</p>}
            </div>

            <div className="form-group">
                <label><b>Date of Birth:</b></label>
                <input type="date" value={dob}
                    onChange={(e) => setDOB(e.target.value)} />
                {error.dob && <p className="error">{error.dob}</p>}
            </div>

            <div className="form-group">
                <label><b>About Me:</b></label>
                <textarea value={about}
                    onChange={(e) => setAbout(e.target.value)} />
                {error.about && <p className="error">{error.about}</p>}
            </div>

            <button type="submit" className="submit-btn">
                Register Student
            </button>

        </form>
    </div>
);
    
}
export default StudentForm;