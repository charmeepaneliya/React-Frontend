import { useState } from "react";
function MultipleState() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, input]);

    // setUsers(()=>[input]);
  };

  console.log("users", users);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">add user</button>
      </form>

      <ul>
        {users.map((u) => {
          return <li>{u}</li>;
        })}
      </ul>
    </>
  );
}
export default MultipleState;



// useState: Used to create and manage state.
// state: Data that can change in a component.
// setCount: Used to update the state.
// onClick: Runs a function when the button is clicked.
// function: A block of code that performs a task.
// return: Returns the UI of the component.
// export default: Allows the component to be used in other files.

