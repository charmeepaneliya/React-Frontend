import { useState } from "react";

const State_01 =()=>{
    const [count, setCount] = useState(0);

    const handleClick = ()=>{
        setCount(count + 1);
    }
      console.log("Hello");  

      return (
        <> 
            <h1>count:{count}</h1>
            <button onClick={handleClick}>Increase</button>
            {/* <button onClick={()=>setCount(count + 1)}>Increase +1</button> */}
            {/* <button onClick={(e)=>setCount(e)}>Increase +1</button> */}
            {/* <button onClick={handleClick()}>Increase +1</button> */}
        </>
      )
}

export default State_01;



