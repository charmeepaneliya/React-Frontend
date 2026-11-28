import React, { useEffect, useState } from "react";
import userAxios from "../api/userAxios";

const User = () => {
  const [users, setUsers] = useState([]);

  const getAllusers = async () => {
    try {
      const res = await userAxios("/getAllUsers");

      console.log(res.data);

      setUsers(res.data.users);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getAllusers();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h2>All Users</h2>

        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Profile pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>

                  <td>
                    {user.profilePic && (
                      <img
                        src={user.profilePic}
                        alt={user.name}
                        width={50}
                        height={50}
                      />
                    )}
                  </td>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  <td>
                    <button className="btn btn-primary btn-sm">Edit</button>
                  </td>

                  <td>
                    <button className="btn btn-danger btn-sm ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
