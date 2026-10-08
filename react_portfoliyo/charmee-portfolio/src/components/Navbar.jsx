import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className={({isActive})=>(isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/skills" className={({isActive})=>(isActive ? "active" : "")}>Skills</NavLink>
        <NavLink to="/projects" className={({isActive})=>(isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/experience" className={({isActive})=>(isActive ? "active" : "")}>Experience</NavLink>
        <NavLink to="/testimonials" className={({isActive})=>(isActive ? "active" : "")}>Testimonials</NavLink>
        <NavLink to="/contact" className={({isActive})=>(isActive ? "active" : "")}>Contact</NavLink>
    </nav>
  )
}

export default Navbar;
