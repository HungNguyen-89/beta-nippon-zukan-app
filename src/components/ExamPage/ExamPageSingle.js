import React from "react";
import "./ExamPageSingle.scss";

const ExamPageSingle = () => {
  const DATA123 = [
    {
      testCheck: true,
      testName: "日本語能力試験模擬と対策",
      testContents: [
        {
          testSerial: "TEST1",
          category: "Test",
          testQuestions: [
            {
              question: (
                <span>
                  私は速くから彼女が働く
                  <span style={{ color: "blue" }}>姿</span>
                  を見ていた
                </span>
              ),
              answer: 2,
              answerToChoose: ["すかた", "すがた", "すはた", "すはだ"],
            },
          ],
        },
        {
          testSerial: "TEST2",
          category: "Test",
          testQuestions: [
            {
              question: (
                <span>
                  私は速くから彼女が働く
                  <span style={{ color: "blue" }}>姿</span>
                  を見ていた
                </span>
              ),
              answer: 2,
              answerToChoose: ["すかた", "すがた", "すはた", "すはだ"],
            },
          ],
        },
        {
          testSerial: "TEST3",
          category: "Test",
          testQuestions: [
            {
              question: (
                <span>
                  私は速くから彼女が働く
                  <span style={{ color: "blue" }}>姿</span>
                  を見ていた
                </span>
              ),
              answer: 2,
              answerToChoose: ["すかた", "すがた", "すはた", "すはだ"],
            },
          ],
        },
        {
          testSerial: "TEST4",
          category: "Test",
          testQuestions: [
            {
              question: (
                <span>
                  私は速くから彼女が働く
                  <span style={{ color: "blue" }}>姿</span>
                  を見ていた
                </span>
              ),
              answer: 2,
              answerToChoose: ["すかた", "すがた", "すはた", "すはだ"],
            },
          ],
        },
        {
          testSerial: "TEST5",
          category: "Test",
          testQuestions: [
            {
              question: (
                <span>
                  私は速くから彼女が働く
                  <span style={{ color: "blue" }}>姿</span>
                  を見ていた
                </span>
              ),
              answer: 2,
              answerToChoose: ["すかた", "すがた", "すはた", "すはだ"],
            },
          ],
        },
      ],
    },
  ];

  // console.log(DATA[0].testName);

  return (
    <div className="exam-page-single-container">
      {DATA123.map((data) => (
        <div>
          <div className="exam-page-single-header">
            <div className="exam-page-single-title">{data.testName}</div>
          </div>
          {data.testContents.map((content) => (
            <div className="exam-page-single-items">
              <div className="exam-page-single-item">
                <div className="exam-page-single-item-name">
                  {content.testSerial}
                </div>
                <button className="examp-page-single-item-btn">START</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExamPageSingle;
