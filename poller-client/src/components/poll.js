import React from 'react';
import Option from './option';
import PropTypes from 'prop-types';
import './poll.css';

// Props is defined and static.
/**
 * Represents a poll component.
 * @param {object} props
 * @return {JSX}
 */
function Poll(props) {
  let totalVotes = 0;
  for (const obj of props.options) {
    totalVotes += obj.votes;
  }

  return (
    <div className="Poll">
      <h1>{props.title}</h1>
      {props.options.map((el) => (
        <Option
          {...el}
          percentage={(el.votes / totalVotes) * 100}
          key={el.title}
        />
      ))}
    </div>
  );
}

Poll.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Poll;
