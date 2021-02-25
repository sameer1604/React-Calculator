import "./index.css";
import React, { useState } from "react";

function Calc() {
  const [text, setText] = useState("0");
  const operate = (data) => {
    if (text !== "0") {
      setText(text.concat(data));
    } else {
      setText(data);
    }
  };
  const evaluate = () => {
    setText(eval(text));
  };
  const reset = () => {
    setText("0");
  };

  return (
    <>
      <div className="container">
        <h1>React Calculator</h1>
      </div>
      <div className="container">
        <h2>{text}</h2>
        <div>
          <button className="btn" onClick={() => operate("1")}>
            1
          </button>
          <button className="btn" onClick={() => operate("2")}>
            2
          </button>
          <button className="btn" onClick={() => operate("3")}>
            3
          </button>
          <button className="btn" onClick={() => operate("+")}>
            +
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => operate("4")}>
            4
          </button>
          <button className="btn" onClick={() => operate("5")}>
            5
          </button>
          <button className="btn" onClick={() => operate("6")}>
            6
          </button>
          <button className="btn" onClick={() => operate("-")}>
            -
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => operate("7")}>
            7
          </button>
          <button className="btn" onClick={() => operate("8")}>
            8
          </button>
          <button className="btn" onClick={() => operate("9")}>
            9
          </button>
          <button className="btn" onClick={() => operate("*")}>
            *
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => operate("0")}>
            0
          </button>
          <button className="btn" onClick={() => operate("/")}>
            /
          </button>
          <button className="btn" onClick={() => evaluate("=")}>
            =
          </button>
          <button className="btn" onClick={() => reset()}>
            C
          </button>
        </div>
      </div>
      <div className="container">
        <button className="btn">
          <a href="/converter">Converter</a>
        </button>
        <button className="btn">
          <a href="/">Home</a>
        </button>
      </div>
    </>
  );
}

export default Calc;
