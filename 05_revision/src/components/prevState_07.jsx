import React, { useState } from "react";

const PrevState_07 = () => {
  const [score, setScore] = useState(0);

  const handleScore = () => {
    setScore((prev) => prev + 10);
  };

  return (
    <>
      <h1>Score:{score}</h1>

      <button onClick={handleScore}>+10</button>

      <br />
      <br />

      <button
        onClick={() => {
          handleScore();
          handleScore();
          handleScore();
          handleScore();
          handleScore();
        }}
      >
        +50
      </button>
    </>
  );
};

export default PrevState_07;
