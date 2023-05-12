import { useEffect } from "react";
import "./Test.scss";
import React, { useState } from "react";

const array1 = ["A.", "B.", "C.", "D."];

const DATA = [
  {
    key1: (
      <span>
        私は速くから彼女が働く<span style={{ color: "blue" }}>姿</span>
        を見ていた
      </span>
    ),
    key2: 2,
    key3: ["すかた", "すがた", "すはた", "すはだ"],
  },
  {
    key1: (
      <span>
        スポーツをする時は、ときどき水分を
        <span style={{ color: "blue" }}>補った</span>
        ほうがいい。
      </span>
    ),
    key2: 4,
    key3: ["とった", "あたった", "たもった", "おぎなった"],
  },
  {
    key1: (
      <span>
        3人に1人の<span style={{ color: "blue" }}>割合</span>
        で、その試験に合格している。
      </span>
    ),
    key2: 3,
    key3: ["かつあい", "かっごう", "わりあい", "わりごう"],
  },
  {
    key1: (
      <span>
        それでは、来月の
        <span style={{ color: "blue" }}>中旬</span>
        にまたご連絡します。
      </span>
    ),
    key2: 4,
    key3: ["なかば", "なかごろ", "ちゅうかん", "ちゅうじゅん"],
  },
  {
    key1: (
      <span>
        病気やけがに
        <span style={{ color: "blue" }}>備えて</span>
        、危険に入っておいたほうがいい。
      </span>
    ),
    key2: 2,
    key3: ["ささえて", "そなえて", "そろえて", "ひかえて"],
  },
  {
    key1: (
      <span>
        ズボンの前と後ろを<span style={{ color: "blue" }}>逆</span>
        にはいていた。
      </span>
    ),
    key2: 3,
    key3: ["きゃく", "きゃぐ", "ぎゃく", "ぎゃぐ"],
  },
];

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
    return item.key3;
  });

  const result2 = result.map((item) => {
    return getRandomIndexOfArray(item);
  });
  return result2;
};

const Test = () => {
  const [randomData, setRandomData] = useState(() =>
    getRandomIndexOfArray(DATA)
  );

  const [randomData2, setRandomData2] = useState(() =>
    getRandomIndexOfArray2(randomData)
  );

  console.log(randomData);
  console.log(randomData2);

  const Check = (x) => {
    let mark = true;
    let index;
    let chon = "chon" + x;
    let kt = "check" + x;
    let dapan = "dapan" + x;
    console.log(chon);
    let a = document.getElementById(chon).value;
    console.log(a);
    let b;
    switch (a) {
      case "A": {
        b = 0;
        document.getElementById(x + "0").style.color = "blue";
        document.getElementById(x + "1").style.color = "black";
        document.getElementById(x + "2").style.color = "black";
        document.getElementById(x + "3").style.color = "black";
        break;
      }
      case "B": {
        b = 1;
        document.getElementById(x + "0").style.color = "black";
        document.getElementById(x + "1").style.color = "blue";
        document.getElementById(x + "2").style.color = "black";
        document.getElementById(x + "3").style.color = "black";
        break;
      }
      case "C": {
        b = 2;
        document.getElementById(x + "0").style.color = "black";
        document.getElementById(x + "1").style.color = "black";
        document.getElementById(x + "2").style.color = "blue";
        document.getElementById(x + "3").style.color = "black";
        break;
      }
      case "D": {
        b = 3;
        document.getElementById(x + "0").style.color = "black";
        document.getElementById(x + "1").style.color = "black";
        document.getElementById(x + "2").style.color = "black";
        document.getElementById(x + "3").style.color = "blue";
        break;
      }
      case "": {
        b = -1;
        document.getElementById(x + "0").style.color = "black";
        document.getElementById(x + "1").style.color = "black";
        document.getElementById(x + "2").style.color = "black";
        document.getElementById(x + "3").style.color = "black";
        break;
      }
    }

    for (let i = 0; i < 4; i++) {
      let a = randomData[x].key3;
      let b = randomData[x].key2;
      if (randomData2[x][i] === a[b - 1]) {
        index = i;
      }
    }

    if (b !== -1) {
      if (index === b) {
        document.getElementById(kt).innerHTML = "正解";
      } else {
        document.getElementById(kt).innerHTML = "NG";
      }
      document.getElementById(dapan).innerHTML = index + 1;
    } else {
      document.getElementById(kt).innerHTML = "";
      document.getElementById(dapan).innerHTML = "";
    }
  };

  const answerDisplay = (index) => {
    const steps = [];
    for (let i = 0; i < randomData2[index].length; i++) {
      steps.push(
        <div className={`answerABCD answer${i}`} id={index + `${i}`}>
          {array1[i]}
          {randomData2[index][i]}
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

  return (
    <>
      <header className="header">
        <div id="title">第1回　模擬テスト</div>
        <div id="check">
          <button className="summit2" id="btn" onClick={() => Check2()}>
            CHECK
          </button>
        </div>
      </header>
      <section className="test-background">
        <div id="questionMondai1">
          問題 1.<span>　　　　　</span>
          の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。
        </div>
        <div id="backgroundMondai1">
          {randomData &&
            randomData.length > 0 &&
            randomData.map((item, index) => {
              return (
                <div className="questionRandom">
                  <div className="questionNumber">
                    {index + 1}
                    {`. `}
                    {item.key1}
                  </div>
                  {answerDisplay(index)}
                  <div className="selectAnswerABCD">
                    <div id={`select${index}`}>
                      <select
                        className="selectAnswer"
                        id={`chon${index}`}
                        onChange={() => Check(index)}
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
                      id={`check${index}`}
                      style={{ color: "black" }}
                    ></div>
                    <div
                      className="textHidden"
                      id={`dapan${index}`}
                      style={{ color: "black" }}
                    ></div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Test;
