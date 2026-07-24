import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/Employee">Employee</NavLink>
                <NavLink to="/AddEmployee">Add Employee</NavLink>
            </nav>
        </>
    )
}
export default Navbar;



// import { Routes , Route , BrowserRouter } from "react-router-dom";
// import Navbar from "./Tasks/Task7 - StudentDashboard(Routes & Form - API)/Navbar";
// import Dashboard from "./Tasks/Task7 - StudentDashboard(Routes & Form - API)/Dashboard";
// import Employee from "./Tasks/Task7 - StudentDashboard(Routes & Form - API)/Employee";
// import AddEmployee from "./Tasks/Task7 - StudentDashboard(Routes & Form - API)/AddEmployee";
// import "./Tasks/Task7 - StudentDashboard(Routes & Form - API)/employee.css"
// import EmployeeProfile from "./Tasks/Task7 - StudentDashboard(Routes & Form - API)/EmployeeProfile";
// import { useEffect, useState } from "react";

// function App(){
//   const [employees , setEmployees] = useState([])
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
  

//   useEffect(()=>{

//     fetch("https://dummyjson.com/users")
//     .then(res=>res.json())
//     .then(data=>{

//         setEmployees(data.users);

//       })

//     },[]);

//   function addEmployee(employee){
//     setEmployees((prev)=> [
//       employee, ...prev
//     ])
//   }
//   return(
//     <>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path ="/" element = {<Dashboard employees={employees}/>}/> 
//         <Route path="/Employee" element={<Employee employees={employees} setSelectedEmployee={setSelectedEmployee}/>}/>
//         <Route path="/AddEmployee" element={<AddEmployee addEmployee={addEmployee}/>}/>
//         <Route path="/employee/:id" element={<EmployeeProfile employee={selectedEmployee}/>}/>
//      </Routes>
      
//       </BrowserRouter>
//     </>
//   )
// }
// export default App;