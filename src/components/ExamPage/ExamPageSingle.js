import React, { useEffect, useState } from "react";
import "./ExamPageSingle.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ExamPageSingle = () => {
  // const { empid } = useParams();
  const [dataTest, setDataTest] = useState([]);
  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(
        "https://db-beta-nippon-zukan.onrender.com/test/power-drill-vocabulary-n2"
      );
      let data = res && res.data ? res.data : [];
      console.log(res.data);
      setDataTest(data);
    };

    asyncFn();
  }, []);

  // console.log(dataTest);

  // console.log(DATA[0].testName);

  return (
    <div className="exam-page-single-container">
      {/* {data.map((content) => ( */}

      <div>
        <div className="exam-page-single-header">
          <div className="exam-page-single-title">{dataTest.testName}</div>
        </div>
        <div className="exam-page-single-items">
          {dataTest.testData?.map((content) => (
            <div className="exam-page-single-item">
              <div className="exam-page-single-item-name">{content.name}</div>
              <button className="examp-page-single-item-btn">
                <Link
                  className="heading-links-item"
                  to={`/test/power-drill-vocabulary-n2-${content.id}`}
                >
                  START
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamPageSingle;
