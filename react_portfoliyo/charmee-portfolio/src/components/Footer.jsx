import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Footer.css";

const navLinks = [
  { to: "/",            label: "Home" },
  { to: "/about",       label: "About" },
  { to: "/skills",      label: "Skills" },
  { to: "/projects",    label: "Projects" },
  { to: "/experience",  label: "Experience" },
  { to: "/testimonials",label: "Testimonials" },
  { to: "/contact",     label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-inner">
          {/* Brand */}
          <p className="footer-brand">
            Charmee<span className="footer-brand-dot">.</span>
          </p>

          {/* Navigation links */}
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === "/"}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-divider" aria-hidden="true"></div>

          {/* Copyright */}
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Charmee Paneliya. All rights reserved.
          </p>

          {/* Built with */}
          <p className="footer-built">
            Built with{" "}
            <span className="footer-heart">♥</span>
            {" "}using{" "}
            <span className="footer-tech">React</span>
            {" & "}
            <span className="footer-tech">Vite</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;