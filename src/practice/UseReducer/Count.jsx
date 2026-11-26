import { useReducer } from "react";
function reducer(state , action){
    switch(action.type){
        case  "INCREAMENT" :
            return state + 1;

        case "DECREMENT" :
            return state - 1;

        case "RESET":
            return 0;

        case "INCREASE_BY_5":
            return state + 5;

        case "PREVENT_COUNT_0":
            if(state < 0){
                return state + 1
            }

        default:
            return state;
    }

}


function Count(){
    const [count , dispatch] = useReducer(reducer , 0);

  return(
    <>
      <h3>UsReducer Example</h3>
      <h4>Count {count}</h4>

      <button onClick={()=> dispatch({type : "INCREAMENT"})}>Increament</button>
      <button onClick={()=> dispatch({type : "DECREMENT"})}>DECREMENT</button>
      <button onClick={()=> dispatch({type : "RESET"})}>RESET</button>
      <button onClick={()=> dispatch({type : "INCREASE_BY_5"})}>INCREASE_BY_5</button>
      <button onClick={()=> dispatch({type : "PREVENT_COUNT_0"})}>PREVENT_COUNT_0</button>

    </>
  )
}
export default Count;