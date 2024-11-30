import React, { useState } from "react";
import { Navbar, Nav, Button, Dropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa"; // Import the down arrow icon
import "./Header.css";
import { useSelector } from "react-redux";

export const Header = () => {
  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);

  return (
    <header>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="/Assets/Logo/epeLogo.gif" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {isLoggedIn && (
                <Nav.Link as={Link} to="/user">
                  PiggyBox
                </Nav.Link>
              )}
              {!isLoggedIn && <Dropdown
                show={showDropdown}
                onToggle={toggleDropdown}
                className="login-dropdown"
              >
                <Button
                  variant="outline-primary"
                  onClick={toggleDropdown}
                  className="login-btn"
                >
                  Login <FaCaretDown />
                </Button>
                <Dropdown.Menu align="end">
                  <Dropdown.Header>Piggy Box</Dropdown.Header>
                  <div className="dropdown-auth-links">
                    <span>Personal</span>{" "}
                    <span className="auth-options">|</span>
                    <Dropdown.Item as={Link} to="/user/auth/login">
                      Login
                    </Dropdown.Item>
                    <span className="auth-options">|</span>
                    <Dropdown.Item as={Link} to="/user/auth/signUp">
                      Register
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
