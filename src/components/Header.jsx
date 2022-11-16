import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!isDark);
    // const html = document.getElementsByTagName("body");
    // console.log(html);
    document.body.classList.toggle("dark");
  };
  return (
    <Navbar className="shadow header fixed-top" expand="lg">
      <Container>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand>World Info</Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={toggleDark}>
              <span>i</span>Dark Mode
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
