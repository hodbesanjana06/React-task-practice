import { Link } from "react-router-dom";
function Dashboard({employees}){

    const totalEmp = employees.length;
    const departments = [
        ...new Set(
            employees.map((emp)=> emp.company.department)
        )
    ]
    const totaldept = departments.length

    const developerCount = employees.filter((emp)=> emp.company.title ?.toLowerCase().includes("developer")).length

    const marketingCount = employees.filter((emp)=> emp.company.department ?.toLowerCase().includes("marketing")).length

    const managementCount = employees.filter((emp)=> emp.company.department ?.toLowerCase().includes("management")).length


    return(
        <>
            <div className="home-container">

                <div className="welcome-section">
                    <h3>
                        Welcome to EmplyeeHub 👤

                    </h3>
                </div>

                <div className="summary-card">
                    <div className="card">
                        <h3>
                             Total Employees <br />
                            {totalEmp}
                        </h3>
                    </div>
                    <div className="card">
                        <h3>
                             Departments  <br />
                            {totaldept}
                        </h3>
                    </div>
                    <div className="card">
                        <h3>
                             Avg Age  <br />
                            30
                        </h3>
                    </div>

                </div>


                <div className="emp-overview">
                    <h2>Employee Overview</h2>
                    <div className="overview-card">
                        <h3>
                             👨‍💻 Developers <br />
                             {developerCount}
                        </h3>
                    </div>

                    <div className="overview-card">
                        <h3>
                            🎨 Designerd <br />
                             8
                        </h3>
                    </div>

                    <div className="overview-card">
                        <h3>
                            📢 Marketing <br />
                             {marketingCount}
                        </h3>
                    </div>

                    <div className="overview-card">
                        <h3>
                            💼 Management <br />
                             {managementCount}
                        </h3>
                    </div>
                </div>

                <div className="quick-action">
                    <Link to="/Employee">👥 View Employee</Link> 
                    <Link to="/AddEmployee">➕ Add Employee</Link>
                </div>

            </div>
        </>
    )
}
export default Dashboard;