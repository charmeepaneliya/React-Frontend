import { useState } from "react";

function PrevState() {
  const [count, setCount] = useState(0);

  const increaseOne = ()=>{
    setCount((prev) => prev + 1);
  }

  
  return (
    <> 
        <h1>{count}</h1>
        <button onClick={increaseOne}>Increase1</button>
        
      
      <button onClick={()=>{
        increaseOne();
        increaseOne();
        increaseOne();
        increaseOne();
        increaseOne();

      }}>+5</button>
    </>
  );
}
export default PrevState;
