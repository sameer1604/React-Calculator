import "./index.css";
import React, { useState } from "react";
function Home() {
  return (
    <>
      <div className="container">
        <h1>React Level 2 Task</h1>
        <ul>
          <li>
            <a href="/calc">
              <h1>Calculator</h1>
            </a>
          </li>
          <li>
            <a href="/converter">
              <h1>Converter</h1>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Home;
