import { useReducer } from "react";

const initialState = false;

function reducer(state , action){
    switch(action.type){
        case "hide":
            return false
        case "show":
            return true;
        default:
            state
    }

}

function Toogle(){
    const [state , dispatch] = useReducer(reducer , initialState);

    return(
        <>
            <center><h2>Toggle</h2></center>
            <h3>{state && <h3>Welcome ! to react useReducer....</h3>}</h3>
            <button onClick={()=> dispatch({type : "hide"})}>Hide Msg</button> 
            <button onClick={()=> dispatch({type : "show"})}>Show Msg</button>
        </>
    )
}
export default Toogle;
