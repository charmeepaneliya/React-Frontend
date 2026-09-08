import { useState } from "react";
function MultipleState() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const addName = () => {
    setNames((prev) => [...prev, name]);
    setName("");
  };

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <button onClick={addName}>Submit</button>

      {names.map((name) => (
        <li>{name}</li>
      ))}
    </>
  );
}
export default MultipleState;
