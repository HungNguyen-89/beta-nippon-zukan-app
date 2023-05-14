import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import closeBtn from "../assets/images/close.svg";

const Header = () => {
  // const openNavMenu = document.querySelector(".open-nav-menu"),
  //   closeNavMenu = document.querySelector(".close-nav-menu"),
  //   navMenu = document.querySelector(".nav-menu"),
  //   menuOverlay = document.querySelector(".menu-overlay"),
  //   mediaSize = 991;

  // const toggleNav = () => {
  //   navMenu.classList.toggle("open");
  //   menuOverlay.classList.toggle("active");
  //   document.body.classList.toggle("hidden-scrolling");
  // };

  // openNavMenu.addEventListener("click", toggleNav);
  // closeNavMenu.addEventListener("click", toggleNav);
  // // close the navMenu by clicking outside
  // menuOverlay.addEventListener("click", toggleNav);

  // navMenu.addEventListener("click", (event) => {
  //   if (
  //     event.target.hasAttribute("data-toggle") &&
  //     window.innerWidth <= mediaSize
  //   ) {
  //     // prevent default anchor click behavior
  //     event.preventDefault();
  //     const menuItemHasChildren = event.target.parentElement;
  //     // if menuItemHasChildren is already expanded, collapse it
  //     if (menuItemHasChildren.classList.contains("active")) {
  //       collapseSubMenu();
  //     } else {
  //       // collapse existing expanded menuItemHasChildren
  //       if (navMenu.querySelector(".menu-item-has-children.active")) {
  //         collapseSubMenu();
  //       }
  //       // expand new menuItemHasChildren
  //       menuItemHasChildren.classList.add("active");
  //       const subMenu = menuItemHasChildren.querySelector(".sub-menu");
  //       subMenu.style.maxHeight = subMenu.scrollHeight + "px";
  //     }
  //   }
  // });
  // const collapseSubMenu = () => {
  //   navMenu
  //     .querySelector(".menu-item-has-children.active .sub-menu")
  //     .removeAttribute("style");
  //   navMenu
  //     .querySelector(".menu-item-has-children.active")
  //     .classList.remove("active");
  // };
  // const resizeFix = () => {
  //   // if navMenu is open ,close it
  //   if (navMenu.classList.contains("open")) {
  //     toggleNav();
  //   }
  //   // if menuItemHasChildren is expanded , collapse it
  //   if (navMenu.querySelector(".menu-item-has-children.active")) {
  //     collapseSubMenu();
  //   }
  // };

  // window.addEventListener("resize", function () {
  //   if (this.innerWidth > mediaSize) {
  //     resizeFix();
  //   }
  // });

  const [btnState, setBtnState] = useState(false);
  const handleClick = () => {
    setBtnState((btnState) => !btnState);
  };
  const toggleClassCheck = btnState ? " active" : "";

  return (
    //  header start
    <header className="header">
      <div className="container">
        <div className="header-main">
          <NavLink to="/" className="logo">
            NIPPON ZUKAN
          </NavLink>
          <div className="open-nav-menu">
            <span></span>
          </div>
          <div className="menu-overlay"></div>
          {/* navigation menu start */}
          <nav className="nav-menu">
            <div className="close-nav-menu">
              <img src={closeBtn} alt="close" />
            </div>
            <ul className="menu">
              <li
                className={`menu-item${toggleClassCheck}`}
                onClick={handleClick}
              >
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/tu-vung" data-toggle="sub-menu">
                  Từ vựng
                </NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/tu-vung/N1">N1</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/tu-vung/N2">N2</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/tu-vung/N3">N3</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/tu-vung/N3">N4</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/tu-vung/N5">N5</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/tu-vung/theo-chu-de">Theo chủ đề</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/tu-vung/huong-dan">Hướng dẫn</NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/ngu-phap" data-toggle="sub-menu">
                  Ngữ pháp
                </NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/ngu-phap/N1">N1</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/ngu-phap/N2">N2</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/ngu-phap/N3">N3</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/ngu-phap/N3">N4</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/ngu-phap/N5">N5</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/ngu-phap/mau-ngu-phap-khong-thay-trong-JLPT">
                      JLPTにない文型
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/de-thi" data-toggle="sub-menu">
                  Đề thi
                </NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/de-thi/N1">N1</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/de-thi/N2">N2</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/de-thi/N3">N3</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/de-thi/N3">N4</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/de-thi/N5">N5</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/de-thi/tong-hop">Tổng hợp</NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/games" data-toggle="sub-menu">
                  Games
                </NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/games/nhin-kanji-doan-chu">
                      Nhìn Kanji đoán chữ
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/games/nhin-hinh-doan-chu">
                      Nhìn hình đoán chữ
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/media" data-toggle="sub-menu">
                  Media
                </NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/media/audio">Audio</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/media/video">Video</NavLink>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item${toggleClassCheck}`}
                onClick={handleClick}
              >
                <NavLink to="/blog" data-toggle="sub-menu">
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
          {/*  navigation menu end */}
        </div>
      </div>
    </header>
  );
};

export default Header;
