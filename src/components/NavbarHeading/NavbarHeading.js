import React from "react";
import "./NavbarHeading.scss";
import { Link } from "react-router-dom";

const NavbarHeading = () => {
  return (
    <div class="heading-container">
      <div className="heading">
        <div className="heading-title">Đề thi</div>
        <div className="heading-links">
          <Link className="heading-links-item active" to="/de-thi-tong-hop">
            N1
          </Link>
          <Link
            className="heading-links-item"
            // to="/test/power-drill-vocabulary-n2"
          >
            N2
          </Link>
          <Link className="heading-links-item" to="/de-thi">
            N3
          </Link>
          <Link className="heading-links-item" to="/">
            N4
          </Link>
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
