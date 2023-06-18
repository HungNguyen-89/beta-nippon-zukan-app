import { useEffect } from "react";
import "./Test.scss";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const array1 = ["A.", "B.", "C.", "D."];

const getRandomIndexOfArray = (array) => {
  let d = [];
  d[0] = 0;
  let w = 0;
  do {
    let check = true;
    let y = Math.floor(Math.random() * array.length);
    for (let i = 0; i <= w; i++) {
      if (d[i] === y) {
        check = false;
        break;
      }
    }
    if (check === true) {
      d[w++] = y;
    }
  } while (w < array.length);

  let e = [];

  for (let j = 0; j < d.length; j++) {
    e[j] = array[d[j]];
  }
  return e;
};

const getRandomIndexOfArray2 = (array) => {
  const result = array.map((item) => {
    return item.answerToChoose;
  });

  const result2 = result.map((item) => {
    return getRandomIndexOfArray(item);
  });
  return result2;
};

const Test = () => {
  // const [randomData, setRandomData] = useState(() =>
  //   getRandomIndexOfArray(DATA)
  // );
  const { id } = useParams();

  const urlStart = id.slice(0, -7);
  const urlEnd = id.slice(-6);
  console.log(urlStart, urlEnd);
  const [dataTest, setDataTest] = useState([]);
  useEffect(() => {
    const asyncFn = async () => {
      let res = await axios.get(
        `https://db-beta-nippon-zukan.onrender.com/${urlStart}/${urlEnd}`
      );
      let data = res && res.data ? res.data : [];
      // console.log(res.data);
      setDataTest(data);
    };

    asyncFn();
  }, []);

  const data1 = dataTest.testQuestionAll?.map((test) => {
    const data5 = getRandomIndexOfArray(test.testQuestions);
    const data3 = data5?.map((test3) => {
      return getRandomIndexOfArray(test3.answerToChoose);
    });

    return {
      question: test.testQuestionTitle,
      testQuestions: data5,
      testAnswerRandom: data3,
    };
  });

  // const data2 = data1?.map((test) => {
  //   return test.testQuestions?.map((test2) => {
  //     return getRandomIndexOfArray(test2.answerToChoose);
  //   });
  // });

  console.log(data1);

  // console.log(data2);

  // const [randomData, setRandomData] = useState(() => {
  //   return data123;
  // });
  // setRandomData(data123);
  // console.log(randomData);

  // const [randomData2, setRandomData2] = useState(() =>
  //   getRandomIndexOfArray2(data123)
  // );

  // console.log(randomData);
  //console.log(randomData2);

  const Check = (x, y) => {
    //let mark = true;
    const index = `${x}${y}`;
    const answerA = document.getElementById(index + "0");
    const answerB = document.getElementById(index + "1");
    const answerC = document.getElementById(index + "2");
    const answerD = document.getElementById(index + "3");
    let indexAnswer;

    let chon = "chon" + index;
    let kt = "check" + index;
    let dapan = "dapan" + index;
    console.log(chon);
    let a = document.getElementById(chon).value;
    console.log(a);
    let b;
    switch (a) {
      case "A": {
        b = 0;
        answerA.style.color = "blue";
        answerB.style.color = "black";
        answerC.style.color = "black";
        answerD.style.color = "black";
        break;
      }
      case "B": {
        b = 1;
        answerA.style.color = "black";
        answerB.style.color = "blue";
        answerC.style.color = "black";
        answerD.style.color = "black";
        break;
      }
      case "C": {
        b = 2;
        answerA.style.color = "black";
        answerB.style.color = "black";
        answerC.style.color = "blue";
        answerD.style.color = "black";
        break;
      }
      case "D": {
        b = 3;
        answerA.style.color = "black";
        answerB.style.color = "black";
        answerC.style.color = "black";
        answerD.style.color = "blue";
        break;
      }
      case "": {
        b = -1;
        answerA.style.color = "black";
        answerB.style.color = "black";
        answerC.style.color = "black";
        answerD.style.color = "black";
        break;
      }
    }

    console.log(data1[x].testQuestions[y].answer);
    console.log(data1[x].testQuestions[y].answerToChoose);
    console.log(data1[x].testAnswerRandom[y]);

    for (let i = 0; i < 4; i++) {
      let a = data1[x].testQuestions[y].answerToChoose;
      let b = data1[x].testQuestions[y].answer;
      if (data1[x].testAnswerRandom[y][i] === a[b - 1]) {
        indexAnswer = i;
      }
    }

    console.log(indexAnswer);

    if (b !== -1) {
      if (indexAnswer === b) {
        document.getElementById(kt).innerHTML = "正解";
      } else {
        document.getElementById(kt).innerHTML = "NG";
      }
      document.getElementById(dapan).innerHTML = indexAnswer + 1;
    } else {
      document.getElementById(kt).innerHTML = "";
      document.getElementById(dapan).innerHTML = "";
    }
  };

  const answerDisplay = (index, index1, array) => {
    const steps = [];
    for (let i = 0; i < array.length; i++) {
      steps.push(
        <div
          className={`answerABCD answer${i}`}
          id={`${index}` + index1 + `${i}`}
        >
          {array1[i]}
          {array[i]}
        </div>
      );
    }

    return steps.map((item) => {
      return (
        <div className={item.props.className} id={item.props.id}>
          {item.props.children}
        </div>
      );
    });
  };

  const Check2 = () => {};
  // const Check = () => {};

  return (
    <>
      <div className="test-header-container">
        <div className="test-header">
          <div className="test-header-left">
            <div className="test-title">耳から覚える語彙</div>
            <div className="test-number">{dataTest.testSerial}</div>
          </div>

          <div className="test-header-right">
            <button className="submit" onClick={() => Check2()}>
              CHECK
            </button>
          </div>
        </div>
      </div>

      <div className="test-background">
        {data1?.map((data, index) => (
          <>
            <div id="questionMondai1">{data.question}</div>
            <div id="backgroundMondai1">
              {data.testQuestions &&
                data.testQuestions?.map((item, index1) => {
                  return (
                    <div className="questionRandom">
                      <div className="questionNumber">
                        {index1 + 1}
                        {`. `}
                        {item.question}
                      </div>
                      {answerDisplay(
                        index,
                        index1,
                        data.testAnswerRandom[index1]
                      )}

                      <div className="selectAnswerABCD">
                        <div id={`select${index}${index1}`}>
                          <select
                            className="selectAnswer"
                            id={`chon${index}${index1}`}
                            onChange={() => Check(index, index1)}
                          >
                            <option value=""></option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </div>
                        <div
                          className="textHidden"
                          id={`check${index}${index1}`}
                          style={{ color: "black" }}
                        ></div>
                        <div
                          className="textHidden"
                          id={`dapan${index}${index1}`}
                          style={{ color: "black" }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Test;
