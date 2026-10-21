import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const NavbarComponent = () => {
  return (
    <>
       <Navbar expand="lg" className="text-light bg-secondary mt-2 rounded-5 " >
      <Container>
        <Navbar.Brand href="#home" className="text-light">Student Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"} className="text-light">Students</Nav.Link>
            <Nav.Link as={NavLink} to={"/add"} className="text-light">Add</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComponent
