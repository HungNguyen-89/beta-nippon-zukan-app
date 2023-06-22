import React, { useState } from "react";
import "./NavbarHeading.scss";
import { Link, NavLink } from "react-router-dom";

const NavbarHeading = () => {
  // const navbar = document.getElementsByClassName("heading-links-item");

  // for (let i = 0; i < navbar.length; i++) {
  //   navbar[i].onClick = function () {
  //     this.classList.add(" active");
  //   };
  // }
  // const [appState, setAppState] = useState({
  //   activeObject: null,
  //   objects: [
  //     { id: 1, link: "/de-thi-tong-hop", name: "N1" },
  //     { id: 2, link: "/", name: "N2" },
  //     { id: 3, link: "/de-thi", name: "N3" },
  //   ],
  // });
  // const getLiClassName = (value) => {
  //   if (value === currentCase) {
  //     return "heading-links-item active";
  //   }
  //   return "heading-links-item";
  // };
  const [currentCase, setCurrentCase] = useState("");

  const currentSelector = (num) => {
    //setCurrentCase(e.__reactProps$xyta5a277e.target.value);
    setCurrentCase(num);
  };

  const DATA = [
    { id: 1, link: "/de-thi-tong-hop", name: "N1" },
    { id: 2, link: "/", name: "N2" },
    { id: 3, link: "/de-thi", name: "N3" },
  ];
  // const toggleActive = (index) => {
  //   setAppState({ ...appState, activeObject: appState.objects[index] });
  // };

  return (
    <div class="heading-container">
      <div className="heading">
        <div className="heading-title">Đề thi</div>
        <div className="heading-links">
          {DATA.map((element, index) => (
            <Link
              key={index}
              to={element.link}
              className={
                currentCase === index + 1
                  ? "heading-links-item active"
                  : "heading-links-item"
              }
              // className="heading-links-item"
              onClick={() => {
                currentSelector(element.id);
              }}
            >
              {element.name}
            </Link>
          ))}
          {/* <Link
            to="/de-thi-tong-hop"
            value={0}
            className={
              currentCase === 0
                ? "heading-links-item active"
                : "heading-links-item"
            }
            onClick={currentSelector}
          >
            N1
          </Link>
          <Link
            to="/"
            value="1"
            className={
              currentCase === "1"
                ? "heading-links-item active"
                : "heading-links-item"
            }
            onClick={currentSelector}
          >
            N2
          </Link>
          <Link
            to="/de-thi"
            value="2"
            className={
              currentCase === "2"
                ? "heading-links-item active"
                : "heading-links-item"
            }
            onClick={currentSelector}
          >
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
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavbarHeading;
