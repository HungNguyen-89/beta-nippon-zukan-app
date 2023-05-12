import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header_container">
      <NavLink to="/" className="navbar-brand">
        NIPPON ZUKAN
      </NavLink>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/tu-vung">Từ vựng</NavLink>
            <ul>
              <li>
                <NavLink to="/tu-vung-theo-chu-de">Theo chủ đề</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Đề thi</NavLink>
            <ul>
              <li>
                <NavLink to="/test">Đề tổng hợp</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Media</NavLink>
            <ul>
              <li>
                <NavLink to="/video">Video</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Games</NavLink>
            <ul>
              <li>
                <NavLink to="/game">Đuổi hình bắt chữ</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/blogs">Blog +</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
