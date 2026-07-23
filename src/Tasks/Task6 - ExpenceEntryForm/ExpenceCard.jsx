
function ExpenceCard({ expencelist , handleDelete  , handleEdit}) {
    
    return (
        <>
            <div className="expense-card">

            <h3>{expencelist.category}</h3>

            <div className="expense-amount">
                ₹ {expencelist.amt}
            </div>

            <div className="expense-name">
               {expencelist.name}
            </div>

            <div className="expense-date">
                📅 {expencelist.date}
            </div>

            <div className="expense-payment">
                 {expencelist.payment}
            </div>

            <button type="button" onClick={()=> handleDelete(expencelist.id)}>Delete</button>
           <button  type="button" onClick={()=> handleEdit(expencelist)}>Edit</button>
        </div>

        </>
        
    );
}

export default ExpenceCard;