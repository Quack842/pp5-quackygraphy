import { React, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/ducky-logo.png";
import styles from "../assets/styles/NavBar.module.css";
import Avatar from "../components/Avatar";
import { useCurrentUser } from "../context/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="fa-solid fa-camera-retro"></i> Add Post
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fa-solid fa-bars-staggered"></i> Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fa-solid fa-heart-pulse"></i> Liked
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} height={40} />
      </NavLink>
      <NavDropdown
        className={styles.NavLink}
        title={currentUser?.username}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Divider />
        <NavDropdown.Item to="/signout">
          <i className="fa-solid fa-right-from-bracket"></i> Sign Out
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-solid fa-door-open"></i> Sign In
      </NavLink>
      <NavLink className={styles.NavLink} to="/register">
        <i className="fa-solid fa-user-plus"></i> Register
      </NavLink>
    </>
  );

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
              <img src={Logo} alt="Ducky" height="45" />
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
              {currentUser && addPostIcon}
              <Nav className="ms-auto justify-content-end">
                <NavLink className={styles.NavLink} to="/">
                  <i className="fa-solid fa-house"></i> Home
                </NavLink>
                {currentUser ? loggedInIcons : loggedOutIcons}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
