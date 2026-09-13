import React, { useState } from "react";

const ObjectUseState = () => {
  // Create a state variable "user" with email and password properties 
  // setUser is used to update the user state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const hendleChange = (e) => {
    // Get the name of the input field 
    // It will be either "email" or "password"
    const field = e.target.name;
    // Update the user object
    setUser((prev) => ({
      ...prev,

      [field]: e.target.value,  //Update only the property whose name matches the input field
    }));
  };

  console.log("users", user);

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={hendleChange}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={hendleChange}
      />

      <br />
      <br />

      <h1>Email:{user.email}</h1>
      <h1>Password:{user.password}</h1>
    </>
  );
};
export default ObjectUseState;
