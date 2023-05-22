import React from "react";
import "./ExamPageAll.scss";
import { FaBook } from "react-icons/fa";
import Course1 from "../../assets/ExamPage/course-1.png";
import Course2 from "../../assets/ExamPage/course-2.png";
import Course3 from "../../assets/ExamPage/course-3.png";
import { Link } from "react-router-dom";

const ExamPageAll = () => {
  return (
    <div className="test-container">
      <div className="test">
        <div className="box-up">
          <img src={Course1} alt="" />
          <div className="content">
            <span>Test</span>
            <h3>日本語能力試験模擬と対策</h3>
          </div>
        </div>
        <div className="box-down">
          <Link to="/" className="exam-btn">
            Vào học
          </Link>
          <Link to="/" className="exam-module-icons">
            <FaBook /> 12 modules
          </Link>
        </div>
      </div>
      <div className="test">
        <div className="box-up">
          <img src={Course2} alt="" />
          <div className="content">
            <span>Test</span>
            <h3>合格できる日本語能力試験N2</h3>
          </div>
        </div>
        <div className="box-down">
          <Link to="/" className="exam-btn">
            Vào học
          </Link>
          <Link to="/" className="exam-module-icons">
            <FaBook /> 12 modules
          </Link>
        </div>
      </div>
      <div className="test">
        <div className="box-up">
          <img src={Course3} alt="" />
          <div className="content">
            <span>Test</span>
            <h3>TRY！日本語N2達</h3>
          </div>
        </div>
        <div className="box-down">
          <Link to="/" className="exam-btn">
            Vào học
          </Link>
          <Link to="/" className="exam-module-icons">
            <FaBook /> 12 modules
          </Link>
        </div>
      </div>
      <div className="test">
        <div className="box-up">
          <img src={Course1} alt="" />
          <div className="content">
            <span>Test</span>
            <h3>日本語能力試験模擬と対策</h3>
          </div>
        </div>
        <div className="box-down">
          <Link to="/" className="exam-btn">
            Vào học
          </Link>
          <Link to="/" className="exam-module-icons">
            <FaBook /> 12 modules
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamPageAll;
