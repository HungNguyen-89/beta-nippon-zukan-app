import React from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarNotMobile from "./NavbarNotMobile";

const Navbar = () => {
  return (
    <div className="navbar-assy">
      <NavbarNotMobile />
      <NavbarMobile />
    </div>
  );
};

export default Navbar;
