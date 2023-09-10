import React, { useState } from "react";

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
    <div className="container mx-auto px-24 shadow-md py-3">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="text-decoration-none">
          <div className="logo">
            {!isDark ? (
              <img src={LogoL} alt="Logo" />
            ) : (
              <img src={LogoD} alt="logo" />
            )}
          </div>
        </NavLink>
        <div className="ms-auto">
          <NavLink onClick={toggleDark}>
            <span className="drk icon">{!isDark ? <FaSun /> : <FaMoon />}</span>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
