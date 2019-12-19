import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [downCount, downSetCount] = useState(0);
  const [toGoCount, toGoSetCount] = useState(0);
  const [ballOnCount, ballOnSetCount] = useState(0);
  const [quarterCount, quarterSetCount] = useState(0);


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downCount}</div>
        <button className="down_button" onClick={() => downSetCount(downCount + 1)}>+Down</button>
        <button className="down_button" onClick={() => downSetCount(downCount - 1)}>-Down</button>

      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGoCount}</div>
        <button className="toGo_button" onClick={() => toGoSetCount(toGoCount + 1)}>+To Go</button>
        <button className="toGo_button" onClick={() => toGoSetCount(toGoCount - 1)}>-To Go</button>

      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnCount}</div>
        <button className="ballOn_button" onClick={() => ballOnSetCount(ballOnCount + 1)}>+Ball On</button>
        <button className="ballOn_button" onClick={() => ballOnSetCount(ballOnCount - 1)}>-Ball On</button>

      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterCount}</div>
        <button className="quarter_button" onClick={() => quarterSetCount(quarterCount + 1)}>+Quarter</button>
        <button className="quarter_button" onClick={() => quarterSetCount(quarterCount - 1)}>-Quarter</button>

      </div>
    </div>
  );
};

export default BottomRow;
