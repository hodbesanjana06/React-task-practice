import { useReducer } from "react";

const initialState = {
    rahul : 0,
    priya : 0,
    amit : 0
}

function reducer(state , action){
    
    switch(action.type){
        case "rahul":
            return {...state , rahul : state.rahul  + 1};
        
        case "priya":
            return{...state , priya : state.priya + 1};

        case "amit":
            return{...state , amit : state.amit + 1};
        
        default :
            return state;
    }
}

function VoteCard(){
    const [state , dispatch] = useReducer(reducer , initialState);
    const total = state.rahul + state.priya + state.amit
    return(
        <>
            <center><h2>Total Vote : {total}</h2></center>
            <h3>Rahul : {state.rahul}</h3>
            <button onClick={()=> dispatch({type : "rahul"})}>Vote for Rahul</button>

            <h3>Priya : {state.priya}</h3>
            <button onClick={()=> dispatch({type : "priya"})}>vote for priya</button>

            <h3>Amit : {state.amit}</h3>
            <button onClick={()=> dispatch({type : "amit"})}> vote for Amit</button>
       </>
    )
}
export default VoteCard;
