import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

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
            <NavLink onClick={toggleDark}>
              <span className="drk">{!isDark ? <FaSun /> : <FaMoon />}</span>{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
