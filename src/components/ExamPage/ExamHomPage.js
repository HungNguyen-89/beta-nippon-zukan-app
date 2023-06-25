import React from "react";
import NavbarHeading from "../NavbarHeading/NavbarHeading";
import ExamPageAll from "./ExamPageAll";
import ExamPageSingle from "./ExamPageSingle";
import { Route, Routes } from "react-router-dom";
import Test from "../Test/Test";

const ExamHomPage = () => {
  return (
    <div className="exam-home-page">
      <NavbarHeading />
      <Routes>
        <Route path="/test/:id" element={<Test />} />
        <Route path="/de-thi/:id" element={<ExamPageAll />} />
        <Route path="/de-thi/" element={<ExamPageSingle />} />
      </Routes>
    </div>
  );
};

export default ExamHomPage;
