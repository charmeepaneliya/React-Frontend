// Import React and useState
import React, { useState } from "react";

// Create a functional component
const State02 = () => {
  // count = current count value // setCount = function used to change count // 0 = initial value
  const [count, setCount] = useState(0);
  // input = current input value // setInput = function used to change input // "" = initial value is empty
  const [input, setInput] = useState("");

  // This function runs when input value changes
  const handleChange = (e) => {
    // e.target = input element // e.target.value = value entered by the user // setInput() updates the input state
    setInput(e.target.value);
  };

  return (
    <>
      <h1>{count}</h1>
      {/* When user types, handleChange function runs. */}
      {/* <input type="text" value={input} onChange={handleChange}/> */}

      {/* We write the function directly inside onChange. */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />


      {/* Arrow function handleChange ko call karta hai. onChange → arrow function → handleChange(e) This is also correct. */}
      {/* <input type="text" value={input} onChange={(e)=>handleChange(e)}/> */}
      <br />
      you have typed <h1>{input}</h1>
    </>
  );
};  
export default State02;
