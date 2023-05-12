import React, { useState } from "react";
import "./FlashCard.scss";

const DATA = [
  {
    key1: "いちご",
    key2: "Dâu tây",
  },
  {
    key1: "りんご",
    key2: "Quả Táo",
  },

  {
    key1: "さくらんぼ",
    key2: "Quả Cherry",
  },

  {
    key1: "みかん",
    key2: "Quả Cam",
  },

  {
    key1: "もも",
    key2: "Quả Đào",
  },

  {
    key1: "ぶどう",
    key2: "Nho",
  },

  {
    key1: "すいか",
    key2: "Dưa hấu",
  },

  {
    key1: "かき",
    key2: "Quả Hồng",
  },
  {
    key1: "なし",
    key2: "Quả Lê",
  },
  {
    key1: "くり",
    key2: "Hạt dẻ",
  },
  {
    key1: "すもも",
    key2: "Quả Mận",
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

const FlashCard = () => {
  const [randomData, setRandomData] = useState(() =>
    getRandomIndexOfArray(DATA)
  );

  const [activeCard, setActiveCard] = useState(false);
  const [activeBack, setActiveBack] = useState(false);
  const [activeBtn, setActiveBtn] = useState(true);
  const [activeNextBtn, setActiveNextBtn] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
    setActiveBack(false);
  };

  const [textFront, setTextFront] = useState(randomData[0].key1);
  const [textBack, setTextBack] = useState(randomData[0].key2);

  const ditiep = () => {
    setActiveCard(false);
    setActiveBack(true);
    if (randomData.length > 1) {
      randomData.splice(0, 1);
      console.log(randomData);
      setTextFront(randomData[0].key1);
      setTextBack(randomData[0].key2);
    } else {
      setActiveNextBtn(true);
      setActiveBtn(false);
      setTextFront("Bạn muốn ôn tập lại?");
      setTextBack("");
    }
    return (
      <div className="front">
        <div id="txtFront">{textFront}</div>
      </div>
    );
  };

  const again = () => {
    setRandomData(getRandomIndexOfArray(DATA));
    setTextFront(randomData[0].key1);
    setTextBack(randomData[0].key2);
    setActiveNextBtn(false);
    setActiveBtn(true);
  };

  return (
    <div id="flashCardContainer">
      <div id="backgroundPlay">
        <div className="label">
          {/* <label> */}
          {/* <input type="checkbox" /> */}
          <div
            onClick={() => handleFlip()}
            className={`flip-card ${activeCard ? "cardFlip" : ""}`}
          >
            {/*front*/}
            <div className="front">
              <div id="txtFront">{textFront}</div>
            </div>
            {/*back*/}
            <div className="back">
              <div id="imageBack"></div>
              <div className={`txtBack ${activeBack ? "hiddenBack" : ""}`}>
                {textBack}
              </div>
            </div>
          </div>
          {/* </label> */}
        </div>
      </div>
      <div id="buttonPlayContainer">
        <button
          className={`buttonPlay ${activeNextBtn ? "hiddenBtn" : ""}`}
          onClick={() => ditiep()}
        >
          Next
        </button>
        <button
          className={`buttonPlay ${activeBtn ? "hiddenBtn" : ""}`}
          onClick={() => again()}
        >
          Again
        </button>
      </div>
      <div id="hiddenNumber"></div>
    </div>
  );
};

export default FlashCard;
