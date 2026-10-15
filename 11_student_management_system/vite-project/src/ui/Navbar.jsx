import { Container,Navbar,Nav, NavLink } from "react-bootstrap";


const NavbarComponent = () => {
  return (
    <>
       <Navbar expand="lg" className="text-light bg-dark mt-2 rounded-5 " >
      <Container>
        <Navbar.Brand href="#home">Student Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>Students</Nav.Link>
            <Nav.Link as={NavLink} to={"/add"}>Add</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComponent
