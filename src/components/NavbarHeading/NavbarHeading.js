import React, { useState } from "react";
import "./NavbarHeading.scss";
import { Link, NavLink } from "react-router-dom";

const NavbarHeading = () => {
  return (
    <div class="heading-container">
      <div className="heading">
        <div className="heading-title">Đề thi</div>
        <div className="heading-links">
          <NavLink className="heading-links-item" to="/de-thi-tong-hop">
            N1
          </NavLink>
          <NavLink className="heading-links-item" to="/">
            N2
          </NavLink>
          <NavLink className="heading-links-item" to="/de-thi">
            N3
          </NavLink>
          <NavLink className="heading-links-item" to="/">
            N4
          </NavLink>
          <Link className="heading-links-item" to="/">
            N5
          </Link>
          <Link className="heading-links-item" to="/">
            JLPTにない文型
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarHeading;
