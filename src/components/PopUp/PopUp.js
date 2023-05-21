import React, { useState } from "react";
import "./PopUp.scss";
import { Route, Routes } from "react-router-dom";
import HomPage from "../HomePage";
import Test from "../Test/Test";
import FlashCard from "../FlashCard/FlashCard";
import WordGuessGame from "../WordGuessGame/WordGuessGame";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import NavbarHeading from "../NavbarHeading/NavbarHeading";
import NavbarMobile from "../Navbar/NavbarMobile";

const PopUp = () => {
  const [popup, setPop] = useState(true);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(true);
  };
  return (
    <div className="testPopUp">
      <button onClick={handleClickOpen}>Open popup</button>
      {popup ? (
        <div>
          <Navbar />
          <NavbarHeading />
          <Routes>
            {/* <Route path="/" element={<HomPage />} /> */}
            <Route path="/test" element={<Test />} />
            <Route path="/tu-vung" element={<FlashCard />} />
            <Route path="/game" element={<WordGuessGame />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <div className="main">
          <div className="popup">
            <div className="popup-header">
              <h1>popup</h1>
              <h1 onClick={closePopup}>X</h1>
            </div>
            <div>
              <p>This is simple popup in React js</p>
              <NavbarMobile setPopUp={setPop} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PopUp;
