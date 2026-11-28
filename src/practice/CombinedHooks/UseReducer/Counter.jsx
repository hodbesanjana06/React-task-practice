import { useReducer } from "react";

const initialState = 0

function reducer(state , action){
    switch(action.type){
        case "Increament":
            return state + 1;
        case "Decreament" :
            return state - 1;
        case "Reset":
            return 0;
        default :
            return state;
    }

}

function Counter(){
    const [state , dispatch] = useReducer(reducer , initialState);

    return(
        <>
            <center>
                <h1>Counter </h1>
                <h2>{state}</h2>
            </center>
            <button onClick={()=> dispatch({type : "Increament"})}>Increment</button> 
            <button onClick={()=> dispatch({type : "Decreament"})}>Decrement</button>
            <button onClick={()=> dispatch({type : "Reset"})}>Reset</button>
        </>
    )
}
export default Counter;
