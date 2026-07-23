import { useState } from "react";
import ExpenceCard from "./ExpenceCard";
function ExpenceForm(){

    function handleform(e){
        e.preventDefault()

        if(editId !== null){
            setexpenceList(
                expencelist.map((expense)=>
                    expense.id === editId
                ? {...expense , name , amt , category , date, payment} :  expense
                )
            )
            setEditId(null)
        }
        else{
             const newobj= {
                id: Date.now(), name , amt , category, date , payment
                }
            setexpenceList([...expencelist , newobj])
        }
        setName("");
        setAmt("");
        setCategory("");
        setDate("");
        setPayment("");
            
    }

    const [name , setName] = useState("")
    const [amt , setAmt] = useState("")
    const [category , setCategory] = useState("")
    const [date , setDate] = useState("")
    const [expencelist , setexpenceList] = useState([])
    const [filterfood , setFilterFood] = useState("")
    const [editId , setEditId] = useState(null)
    const [payment , setPayment]= useState("")
    const [filterDate , setFilterDate] = useState("")

     const totalExpense = expencelist.reduce(
        (total, expense) => total + Number(expense.amt),
        0
    );


    const handleDelete = (id)=> {
        setexpenceList(
            expencelist.filter((expencelist)=> 
            expencelist.id !== id)
        )
    }

    const handleEdit = (expense)=> {

         console.log("Editing:", expense);

        setName(expense.name);
        setAmt(expense.amt);
        setCategory(expense.category);
        setDate(expense.date);
        setPayment(expense.payment);

        setEditId(expense.id)
    }
    const  filterExpense = 
        filterfood === "All" ? expencelist : expencelist.filter(
            (expense) => expense.category === filterfood
        )
 
    return(
        <>
            <div className="expense-container">
               

                <form  className="expense-form" onSubmit={handleform}>
                     <h3>➕ Add Expense</h3>
                    <label>Expense Name</label> <br />
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} /> <br />

                    <label>Paymet Type</label> <br />
                    <select value={payment} onChange={(e)=> setPayment(e.target.value)}>
                        <option value="select payment">select payment</option>
                        <option value="💷 Cash">💷 Cash</option>
                        <option value="💳 UPI">💳 UPI</option>
                        <option value="🏧 Card">🏧 Card</option>
                    </select>

                    <label>Amount</label> <br />
                    <input type="number" value={amt} onChange={(e)=> setAmt(e.target.value)} /> <br />

                    <label>Category</label> <br />
                    <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                        <option value="">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Game">Game</option>
                        <option value="Travel">Travel</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Other">Other</option>
                    </select> <br />
 
                    <label>Date </label> <br />
                    <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} /> <br />

                    <button type="submit">{editId !== null ? "Update Expense" : "Add Expense"}</button> <br /> <br />
                        
                     <div className="expense-summary">
                        <h2>📊 Expense Summary</h2>
                        <h2>
                            Total Items: {expencelist.length} <br />
                            Total Expense: ₹{totalExpense}
                         </h2>
                     </div> <br /> <br />


                    <div className="expense-filter">
                        <label>Categaory : </label>
                        <select value={filterfood} onChange={(e)=> setFilterFood(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Food">Food</option>
                            <option value="Game">Game</option>
                            <option value="Travel">Travel</option>
                            <option value="Vehicle">Vehicle</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="date-filter">
                        <label>🔍 Filter by Date</label>
                        <input type="date" value={filterDate} onChange={(e)=> setFilterDate(e.target.value)} /> 
                    </div>


                    <div className="expense-list">
                        {
                        filterExpense
                        .filter((e)=> filterDate === "All" ? true : e.date === filterDate
                    
                    )
                        .map((e)=>(
                            <ExpenceCard key={e.id} expencelist={e} handleDelete={handleDelete} handleEdit={handleEdit}/>
                        ))}
                    </div>
                </form>

            </div>
            
        </>
    )
}
export default ExpenceForm;




// -------------------------APP.jsx----------------------------
// import ExpenceForm from "./Tasks/Task6 - ExpenceEntryForm/ExpenceForm";
// import "./Tasks/Task6 - ExpenceEntryForm/expence.css"

// function App(){
//   return(
//     <>
//       <ExpenceForm/>
//     </>
//   )
// }
// export default App;
