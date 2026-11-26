import { act, useReducer } from "react";



const initialState = {
    name : "sanjana",
    age : 22,
    dept : "IT",
    salary : 20000
}

function reducer(state , action ){
    switch(action.type){
        case "Update_Name":
            return {...state , name : action.payload};
        
        case "Update_Age":
            return{...state , age : action.payload};
        
        case "Update_Dept":
            return{...state , dept : action.payload};

        case "Update_Salary":
            return{...state , salary : state.salary + 5000};
        default:
            return state;
    }
}

function Student(){
    const [student , dispatch] = useReducer(reducer , initialState);
    return(
        <>
            <h3>Student Info</h3>
            <h4>
                Name : {student.name} <br />
                Age : {student.age} <br />
                Department : {student.dept} <br />
                Salary : {student.salary}
            </h4>
            <button onClick={()=> dispatch({type : "Update_Name", payload : "Rahul"})}>Update Name</button> <br />
            <button onClick={()=> dispatch({type : "Update_Age" , payload: 23})}>Update age</button> <br />
            <button onClick={()=> dispatch({type : "Update_Dept", payload : "Developer"})}>Update Dept</button> <br />
            <button onClick={()=> dispatch({type : "Update_Salary"})}>Update salary</button>
        </>
    )
}
export default Student;