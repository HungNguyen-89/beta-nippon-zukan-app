import React, { useEffect, useState } from "react";
import "./ExamPageSingle.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { GiNotebook } from "react-icons/gi";
import Loading from "../Loading/Loading";
import { VscBook } from "react-icons/vsc";

const ExamPageSingle = () => {
  const [currentCase, setCurrentCase] = useState("");
  const { id } = useParams();
  console.log(id);
  const [dataTest, setDataTest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id.includes("n1")) {
      setCurrentCase(1);
    } else if (id.includes("n2")) {
      setCurrentCase(2);
    } else if (id.includes("n3")) {
      setCurrentCase(3);
    } else if (id.includes("n4")) {
      setCurrentCase(4);
    } else if (id.includes("n5")) {
      setCurrentCase(5);
    }
  }, [id]);

  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(
        `https://db-beta-nippon-zukan.onrender.com/test/${id}`
      );
      let data = res && res.data ? res.data : [];
      console.log(res.data);
      setDataTest(data);
      setLoading(true);
    };

    asyncFn();
  }, [currentCase]);

  const DATA = [
    { id: 1, link: "/de-thi/de-thi-n1", name: "N1" },
    { id: 2, link: "/de-thi/de-thi-n2", name: "N2" },
    { id: 3, link: "/de-thi/de-thi-n3", name: "N3" },
    { id: 4, link: "/de-thi/de-thi-n4", name: "N4" },
    { id: 5, link: "/de-thi/de-thi-n5", name: "N5" },
  ];

  return (
    <>
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
                // onClick={() => {
                //   currentSelector(element.id);
                // }}
              >
                {element.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {loading ? (
        <>
          <div className="exam-page-single-container">
            <div>
              <div className="exam-page-single-header">
                <div className="exam-page-single-title">
                  <span className="exam-page-single-title-icon">
                    <VscBook />
                  </span>
                  {dataTest.testName}
                </div>
              </div>
              <div className="exam-page-single-items">
                {dataTest.testData?.map((content) => (
                  <div className="exam-page-single-item">
                    <div className="exam-page-single-item-name">
                      {content.name}
                    </div>
                    <button className="examp-page-single-item-btn">
                      <Link
                        className="heading-links-item"
                        to={`/test/${content.link}-${content.id}`}
                      >
                        <span className="heading-links-item-icon">
                          <GiNotebook />
                        </span>
                        スタート
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ExamPageSingle;
