function Profile({name , age , sub , details}){
   
    return(
        <>
            <h3>Name {name}</h3>
            <h4>Age : {age}</h4>
            <ul>
                {
                sub.map((subject , index)=>(
                    <li key={index}>{subject}</li>
                ))}
                
            </ul>
            <h4>City : {details.city} || Course : {details.course}</h4>
        </>
    )
}
export default Profile;