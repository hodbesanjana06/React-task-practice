import { useEffect, useState } from "react";

function Index(){
    const [text , setText] = useState("")
    let countchar = text.length
    
    let wordcount = text.trim() ? text.trim().split(/\s+/).length : 0;
    useEffect(()=>{
        document.title = `characters : ${countchar}`
    }, [countchar])
    return(
        <>
            <div className="main-container">
                <h2>useeffect task</h2>

                <textarea value={text} onChange={(e)=> setText(e.target.value)} placeholder="start typing.."></textarea>
                <h5>Total character : {countchar} <br />
                    Total Words : {wordcount}
                </h5>
            </div>  
        </>
    )
}
export default Index;