import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./BasicHookTask.css"
function BasicHookTask(){
    const [like , setLike] = useState(0)
    const [time , setTime] = useState(new Date());
    const textRef = useRef(null);

    const [price , setPrice] = useState([100, 200 , 300]);
    const [count , setCount] = useState(0);
    const [discount , setDiscount] = useState(0);

    const [text , setText] = useState("");
    const [increase , setIncrease] = useState(0);

    
    //shopping card
    const total = useMemo(()=>{
        return price.reduce((t, i)=> t + i , 0)
    }, [price])

    const finalprice = useMemo(()=> {
        return total - (total * discount / 100)
    }, [total , discount])

    //timer 
    useEffect(()=> {
        const timer = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return ()=>{
            clearInterval(timer)
        }
    }, []);

    //useref counter
    function isFocus(){
        textRef.current.focus()
    }
    function show(){
        console.log(textRef.current.value);
    }
    function clear(){
        textRef.current.value = ""
    }

    //useCallback

    const showMsg  = useCallback(()=>{
        console.log("current msg : ", text);
        
    })
    return(
        <>
           <div className="container">
                <h3>Like Button</h3>

                <button className="like-btn" onClick={()=> setLike(like + 1)}>Like | {like}</button> 
                <button className="unlike-btn" onClick={()=> setLike(Math.max(0 , like - 1))}>Dislike</button>
           </div>
           <hr />
           
           <div className="clock">
            <h1>Digital Clock </h1>
                
            <h2>{time.toLocaleTimeString()}</h2>
           </div> <hr />

           <div className="container">
            <h1>Character Counter</h1>
            <textarea ref={textRef} placeholder="enter text...."></textarea>
            <button  className="unlike-btn" onClick={isFocus}>Focus</button>
            <button className="like-btn" onClick={show}>Show Value</button>
            <button className="unlike-btn" onClick={clear}>clear</button>
           </div>
           <hr />


           <div className="container">
            <h3>Shopping Price Calculator</h3>
            <h3>Count {count}</h3>
            <button className="unlike-btn" onClick={()=> setCount(count + 1)}>Increase by 1</button>
            <h3>product prices</h3>
            {
                price.map((i, index)=>(
                    <h4 key={index}>₹{i}</h4>
                ))
            }
            <h3>Total : ₹{total}</h3>
            <label>Discount percentage :
                <input type="number"  value={discount} onChange={(e)=> {
                    const value = Number(e.target.value);
                    setDiscount(Math.min(100 , Math.max(0 , value)));
                }}  min="0" max="100" />    
             </label>
            <h3>Final Price : {finalprice.toFixed(2)}</h3>

           </div>
           <hr />

           <div className="clock">
                <h2>message sender</h2>
                <h2>{increase}</h2>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="enter msg here...."/> <br />
                <button className="like-btn" onClick={showMsg}>send message</button> <br />
                <button className="unlike-btn" onClick={()=> setIncrease(increase + 1)}>Increase </button>
           </div>


        </>
    )
}
export default BasicHookTask;