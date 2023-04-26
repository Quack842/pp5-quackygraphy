import { React, useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import logo from "../assets/images/ducky-logo.png";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Ducky" height="45" />
          </Navbar.Brand>
          <Button variant="secondary" className="d-lg-none" onClick={handleShow}>
          <i className="fa-solid fa-bars"></i>
          </Button>
          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>QuackyGraphy</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto justify-content-end d-flex">
                <Nav.Link>
                  <i className="fa-solid fa-house"></i> Home
                </Nav.Link>
                <Nav.Link>
                  <i className="fa-solid fa-door-open"></i> Sign In
                </Nav.Link>
                <Nav.Link>
                  <i className="fa-solid fa-user-plus"></i> Register
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
