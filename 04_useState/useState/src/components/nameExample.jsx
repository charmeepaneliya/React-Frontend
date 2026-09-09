import React, { useState } from "react";

const NameExample = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>{name}</h1>
      {/* <input type="text" value={name} onChange={handleChange} /> */}

      <br />
      <br />

      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}

      <input type="text" value={name} onChange={(e) => handleChange(e)} />
      <br />
      <h1>{name}</h1>
    </>
  );
};
export default NameExample;
