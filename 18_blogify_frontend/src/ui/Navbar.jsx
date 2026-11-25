import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <h2>Blogify</h2>

      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

    </>
  )
}

export default Navbar
