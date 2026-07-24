import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee , setSelectedEmployee }) {
    const navigate = useNavigate();

    return (

        <div className="emp-card">

            <img src={employee.image} alt={employee.firstName} />

            <div>
                <h3>{employee.firstName} {employee.lastName}</h3>
                 <p>
                    Email : {employee.email}<br />
                    Department : {employee.company.department}
                </p>
             </div>


            <button onClick={()=> { setSelectedEmployee(employee); navigate(`/employee/${employee.id}`)}}>View Profile</button>


        </div>

    )

}

export default EmployeeCard;