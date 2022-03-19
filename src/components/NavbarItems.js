import React from "react";
import "../stylesheets/NavbarItems.css";

function NavbarItems(props) {
  return (
    <div className="navbarItems">
      <p className={props.id === 1 ? "navbarItemsColor" : ""}>{props.name} </p>
    </div>
  );
}

export default NavbarItems;
