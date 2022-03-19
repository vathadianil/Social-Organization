import React from "react";
import "../stylesheets/Navbar.css";
import navbarData from "../Data/NavbarData";
import NavbarItems from "./NavbarItems";

function Navbar() {
  const navbarItemsElement = navbarData.map((data) => (
    <NavbarItems key={data.id} {...data} />
  ));
  return <div className="navbar">{navbarItemsElement}</div>;
}

export default Navbar;
