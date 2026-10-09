// import { NavLink } from "react-router-dom"

// const Navbar = () => {
//   return (
//     <nav>
//         <NavLink to="/" className={({isActive})=>(isActive ? "active" : "")}>Home</NavLink>
//         <NavLink to="/about" className={({isActive})=>(isActive ? "active" : "")}>About</NavLink>
//         <NavLink to="/skills" className={({isActive})=>(isActive ? "active" : "")}>Skills</NavLink>
//         <NavLink to="/projects" className={({isActive})=>(isActive ? "active" : "")}>Projects</NavLink>
//         <NavLink to="/experience" className={({isActive})=>(isActive ? "active" : "")}>Experience</NavLink>
//         <NavLink to="/testimonials" className={({isActive})=>(isActive ? "active" : "")}>Testimonials</NavLink>
//         <NavLink to="/contact" className={({isActive})=>(isActive ? "active" : "")}>Contact</NavLink>
//     </nav>
//   )
// }

// export default Navbar;


import { NavLink } from "react-router-dom";
import { Container, Navbar as BsNavbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <BsNavbar expand="lg" className="portfolio-navbar" sticky="top">
      <Container>
        <BsNavbar.Brand as={NavLink} to="/" className="navbar-logo">
          Charmee<span>.</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="portfolio-navbar"
          className="navbar-toggle"
        />

        <BsNavbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto align-items-lg-center navbar-links">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/skills">
              Skills
            </Nav.Link>

            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>

            <Nav.Link as={NavLink} to="/experience">
              Experience
            </Nav.Link>

            <Nav.Link as={NavLink} to="/testimonials">
              Testimonials
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className="contact-link">
              Contact
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;