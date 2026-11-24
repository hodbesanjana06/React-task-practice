import { useCallback, useState } from "react";

function UseCallback(){

    const [count , setCount] = useState(0)

    const showMsg = useCallback(()=> {
        console.log("cmp render !");
        console.log(`current count ${count}`);
    }, [count])

    return(
        <>
            <h3>Count {count}</h3>
            <button onClick={()=> setCount(count + 1)}>increase count</button>
            <h4>current count : {count}</h4>
            <button onClick={showMsg}>show count</button>
        </>
    )
}
export default UseCallback;
