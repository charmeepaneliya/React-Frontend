import { useState } from "react";

function PrevState() {
  const [count, setCount] = useState(0);

  const increaseOne = ()=>{
    setCount((prev) => prev + 1);
  }

  const increase = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <> 
        <h1>{count}</h1>
        <button onClick={increaseOne}>Increase1</button>
        
      
      <button onClick={increase}>Increase5</button><br/><br/><hr/><br/>
    </>
  );
}
export default PrevState;
