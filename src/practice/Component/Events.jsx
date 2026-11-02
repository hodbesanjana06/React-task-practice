function Events({name , age}){
    function hello(){
        alert("Hello.....Welcome")
    }
    function show_name(){
        alert(`My Name is ${name}`)
    }
    function show_age(){
        alert(`my age is ${age}`)
    }
    return(
        <>
        
            <button onClick={hello}>Say Hello</button>
            <button onClick={show_name}>Show Name</button>
            <button onClick={show_age}>Show Age</button>
        
        </>
    )
}
export default Events;
