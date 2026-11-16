import "./Dashboard.css";

function Dashboard({ students }) {

    const totalStudents = students.length;

    const totalCourses = new Set(
        students.map(student => student.course)
    ).size;

    return (
        <div className="dashboard-container">

            <h2 className="dashboard-title">Dashboard</h2>

            <div className="header-box">

                <div className="total">
                    <p>Total Students</p>
                    <h3>{totalStudents}</h3>
                </div>

                <div className="course">
                    <p>Total Courses</p>
                    <h3>{totalCourses}</h3>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;







// import { useState } from "react";
// import Dashboard from "./practice/combinedTask/Dashboard";
// import StudentForm from "./practice/combinedTask/StudentForm";

// function App() {

//     const [students, setStudents] = useState([]);

//     function addStudent(data) {
//         setStudents(prev => [...prev , data]);
//     }

//     return (
//         <>
//             <Dashboard students={students} />

//             <StudentForm addstudent={addStudent} />
//         </>
//     );
// }

// export default App;