import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function Employee({employees , setSelectedEmployee}){
    function handleform(e){
        e.preventDefault()
    }

    const [search , setSearch] = useState("")
    

    const filterEmployee = employees.filter((e)=>
        e.firstName.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <>
            <div className="employee-section">
                <h3>All Employee</h3>

                <div className="search-section">
                    <form onSubmit={handleform}>
                        <label>Search Employee</label>
                         <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />

                    </form>
                    {
                        filterEmployee.slice(0,6).map((e)=>(
                            <>
                              <EmployeeCard key={e.id} employee={e} setSelectedEmployee={setSelectedEmployee}/>
                            </>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
export default Employee;