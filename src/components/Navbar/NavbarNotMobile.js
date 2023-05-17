import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import NavLinks from "./NavLinks";

const NavbarNotMobile = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-section">
        <div className="logo">LOGO</div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="home-page">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default NavbarNotMobile;
