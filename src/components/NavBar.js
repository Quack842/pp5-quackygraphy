import { React, useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/ducky-logo.png";
import styles from "../assets/styles/NavBar.module.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        className={styles.NavBar}
        expand="md"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="Ducky" height="45" />
            </Navbar.Brand>
          </NavLink>
          <Button
            variant="secondary"
            className={`${styles.Button} d-lg-none`}
            onClick={handleShow}
          >
            <i className="fa-solid fa-bars"></i>
          </Button>
          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className={styles.OffCanvas}>
                QuackyGraphy
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto justify-content-end">
                <NavLink className={styles.NavLink} to="/">
                  <i className="fa-solid fa-house"></i> Home
                </NavLink>
                <NavLink className={styles.NavLink} to="/signin">
                  <i className="fa-solid fa-door-open"></i> Sign In
                </NavLink>
                <NavLink className={styles.NavLink} to="/register">
                  <i className="fa-solid fa-user-plus"></i> Register
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
