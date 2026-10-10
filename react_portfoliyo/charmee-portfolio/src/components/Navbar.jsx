import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar as BsNavbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const sectionLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BsNavbar
      expand="lg"
      className="portfolio-navbar"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        {/* Logo / Brand */}
        <BsNavbar.Brand as={NavLink} to="/" className="navbar-logo">
          <span>
            Charmee<span className="logo-dot">.</span>
            <small className="logo-tag">Full Stack Developer</small>
          </span>
        </BsNavbar.Brand>

        {/* Mobile toggle */}
        <BsNavbar.Toggle
          aria-controls="portfolio-navbar-nav"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        />

        {/* Nav links */}
        <BsNavbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto align-items-lg-center navbar-links">
            {sectionLinks.map(({ to, label }) => (
              <Nav.Link
                as={NavLink}
                key={to}
                to={to}
                end={to === "/"}
                className={to === "/contact" ? "contact-link" : undefined}
                onClick={() => setExpanded(false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;