import React, { useState } from "react";

const ObjectUseState = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const hendleChange = (e) => {
    const field = e.target.name;
    setUser((prev) => ({
      ...prev,
      [field]: e.target.value,
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
