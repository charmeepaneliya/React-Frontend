import React, { useState } from "react";

const AddToDo = () => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  const handleChange = () => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };
  console.log("input", input);

  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <>
      <input
        type="text"
        value={input.task}
        placeholder="Enter your task"
        onChange={handleChange("task", e)}
      />
      <br />
      <br />
      <input
        type="text"
        value={input.description}
        placeholder="Enter your task"
        onChange={handleChange("description", e)}
      />
      <br />
      <br />
      <button type="submit">add</button>
    </>
  );
};

export default AddToDo;
