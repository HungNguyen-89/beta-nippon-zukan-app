import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import NavLinks from "./NavLinks";

const NavbarMobile = ({ setPopUp }) => {
  return (
    <div>
      <div className="main-mobile-nav-links">
        <ul className="mobile-nav-links">
          <li>
            <Link
              to="/"
              className="mobile-home-page"
              onClick={() => {
                setPopUp(true);
              }}
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="/tu-vung"
              className="mobile-home-page"
              onClick={() => {
                setPopUp(true);
              }}
            >
              Từ vựng
            </Link>
          </li>
          <li>
            <Link
              to="/test"
              className="mobile-home-page"
              onClick={() => {
                setPopUp(true);
              }}
            >
              Ngữ pháp
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
