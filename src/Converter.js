import "./index.css";
import React, { useState } from "react";

function Converter() {
  const [cels, setCels] = useState();
  const [fahr, setFahr] = useState();

  const handleClick = () => {
    setFahr(cels * 1.8 + 32);
  };
  const handleChange = (e) => {
    setCels(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>React Converter</h1>
      </div>
      <div className="container">
        <form className="form">
          <h4>
            <label>Please enter the temperature in Celcius</label>
          </h4>
          <input type="text" value={cels} onChange={handleChange}></input>
          <br></br>
        </form>
      </div>
      <div className="container">
        <button className="btn" onClick={() => handleClick()}>
          Convert
        </button>
      </div>
      <div className="container">
        <h2>Temperature in Farheneit is {fahr}</h2>
      </div>
      <div className="container">
        <button className="btn">
          <a href="/calc">Calculator</a>
        </button>
        <button className="btn">
          <a href="/">Home</a>
        </button>
      </div>
    </>
  );
}
export default Converter;
