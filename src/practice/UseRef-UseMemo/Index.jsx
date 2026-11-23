import { useRef } from "react";

function Index(){
    const inputRef = useRef(null)

    function isFocus(){
            inputRef.current.focus()        
    }
    function clear(){
        inputRef.current.value = ""                                                                                                                                                            
    }
    function showValue(){
        console.log(inputRef.current.value);

    }
    return(
        <>
            <h3>useRef example.</h3>
            <input type="text"  ref={inputRef}/> <br />
            <button onClick={isFocus}>Focus</button> <br />
            <button onClick={clear}>clear</button> <br />
            <button onClick={showValue}>show value</button>
        </>
    )
}
export default Index;