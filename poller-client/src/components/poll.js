import React from "react";
import Option from "./option";
import "./poll.css";

// Props is defined and static.
function Poll(props) {
  let totalVotes = 0;
  for (let obj of props.options) {
    totalVotes += obj.votes;
  }

  return (
    <div className="Poll">
      <h1>{props.title}</h1>
      {props.options.map((el) => (
        <Option {...el} percentage={(el.votes / totalVotes) * 100} />
      ))}
    </div>
  );
}

export default Poll;
