function List(){
    const students = ["sanjana" , "Prajwal", "rajiv", "Radha"]

    return(
        <>
            <h3>List & Keys</h3>
            {
                students.map((s, index)=>(
                    <h3 key={index}>{s}</h3>
                ))
            }
            <h4>total student {students.length}</h4>
        </>
    )
}

export default List;
