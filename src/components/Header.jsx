import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import LogoL from "../assets/img/logo-light.png";
import LogoD from "../assets/img/logo-dark.png";

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
          <Navbar.Brand className="logo">
            {!isDark ? <img src={LogoL} /> : <img src={LogoD} />}
          </Navbar.Brand>
        </NavLink>
        <Nav className="ms-auto">
          <NavLink onClick={toggleDark}>
            <span className="drk icon">{!isDark ? <FaSun /> : <FaMoon />}</span>{" "}
          </NavLink>
        </Nav>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Header;
