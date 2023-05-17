import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import NavLinks from "./NavLinks";

const NavbarMobile = () => {
  return (
    <div>
      <div className="main-mobile-nav-links">
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" className="mobile-home-page">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
