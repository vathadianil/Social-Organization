import React from "react";
import logo from "../images/logo.png";
import "../stylesheets/Header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <img className="headerLogoImage" src={logo} alt="Logo" />
      </div>

      <button className="headerBtn btn">Donate</button>
    </div>
  );
}

export default Header;
