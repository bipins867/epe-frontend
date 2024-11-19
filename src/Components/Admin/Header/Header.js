import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your custom logout logic here
    console.log("Performing logout actions...");
    // Example: clearing user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to the logout page
    navigate("/admin/auth");
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img
            src="https://epeindia.in/img/epeLogo.png" // Replace with the actual path to your logo
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          {/* Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="profile-dropdown">
              <PersonCircle size={20} className="me-2" />
              Admin
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/admin/adminProfile">
                Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="button" onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
