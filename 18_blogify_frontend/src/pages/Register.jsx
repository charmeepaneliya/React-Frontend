import React, { useState } from "react";
import userAxios from "../api/userAxios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "",
  });
  const handleChange = (field, e) => {
    setUser((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("phone", user.phone);
    formData.append("address", user.address);
    formData.append("role", user.role);

    try {
      const res = await userAxios.post("/add", formData);
      console.log("Register response:", res.data);
    } catch (error) {
      // console.log("Register error",error.response?.data || error.message);
      console.log("Register error:", error);
      console.log("Backend response:", error.response?.data);
    }
  };
  console.log("user",user);

  return (
    <>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={user.name}
          onChange={(e) => handleChange("name", e)}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) => handleChange("email", e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={(e) => handleChange("password", e)}
        />
        <br />
        <br />
        <input
          type="tel"
          placeholder="Enter phone no"
          value={user.phone}
          onChange={(e) => handleChange("phone", e)}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter address"
          value={user.address}
          onChange={(e) => handleChange("address", e)}
        />
        <br />
        <br />

        <select value={user.role} onChange={(e) => handleChange("role", e)}>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
