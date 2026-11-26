import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };
  return (
    <>
      <h2>Blogify</h2>
      <Link to="/">Home</Link>

      {!token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
         
        </>
      )}
     
      {token && (
        <>
          <Link to="/add-blog">Add Blog</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
     

      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
    </>
  );
};

export default Navbar;
