import StudentForm from "./StudentForm";

function Dashboard({StudentForm}){
    return(
        <>
            <h3>Dashboard</h3>
            <div className="header-box">
                <div className="total">
                    <p>Total Students</p>
                    <h3>12</h3>
                </div>

                <div className="course">
                    <p>Course</p>
                    <h3>4</h3>
                </div>
            </div>

            
        </>
    )
}
export default Dashboard;