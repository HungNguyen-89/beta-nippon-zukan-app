import React from "react";
import Logo from "../../assets/Logo/learn-language.png";

const Navbar = () => {
  const links = [
    { name: "Trang chủ" },
    { name: "Từ vựng" },
    { name: "Ngữ pháp" },
    { name: "Đề thi" },
    { name: "Games" },
    { name: "Media" },
    { name: "Blog" },
    { name: "Hướng dẫn" },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo} />
        <p>NIPPON-ZUKAN</p>
      </div>
      <div className="navbar-links">
        {links.map((link) => (
          <div className="navbar-item">
            <p>{link.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
