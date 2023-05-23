import React from "react";
import "./ExamPageSingle.scss";

const ExamPageSingle = () => {
  return (
    <div className="exam-page-single-container">
      <div className="exam-page-single-header">
        <div className="exam-page-single-title">日本語能力試験模擬と対策</div>
      </div>
      <div className="exam-page-single-items">
        <div className="exam-page-single-item">
          <div className="exam-page-single-item-name">TEST 1</div>
          <button className="examp-page-single-item-btn">START</button>
        </div>
        <div className="exam-page-single-item">
          <div className="exam-page-single-item-name">TEST 2</div>
          <button className="examp-page-single-item-btn">START</button>
        </div>
        <div className="exam-page-single-item">
          <div className="exam-page-single-item-name">TEST 3</div>
          <button className="examp-page-single-item-btn">START</button>
        </div>
      </div>
    </div>
  );
};

export default ExamPageSingle;
