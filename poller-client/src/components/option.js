import React from "react";
import "./option.css";

function roundTo(number, places) {
  let multiplier = Math.pow(10, places);
  return Math.round(number * multiplier) / multiplier;
}

// Props is defined and static.
function Option(props) {
  return (
    <div className="Option">
      <div className="Option_basicinfo">
        <h2>{props.title}</h2>
        <p>{props.votes} votes</p>
      </div>
      <div className="Option_percentage">
        <span
          className="Option_percentage_progressbar"
          style={{
            width: roundTo(props.percentage, 1).toString() + "%",
            backgroundColor: props.color,
          }}
        ></span>
        <span className="Option_percentage_value">
          {roundTo(props.percentage, 1)}%
        </span>
      </div>
    </div>
  );
}

export default Option;
