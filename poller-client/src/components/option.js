import React from 'react';
import './option.css';
import PropTypes from 'prop-types';

/**
 * Rounds a number to a constant number of decimal places
 * @param {float} number
 * @param {int} places
 * @return {float} Rounded number
 */
function roundTo(number, places) {
  const multiplier = Math.pow(10, places);
  return Math.round(number * multiplier) / multiplier;
}

// Props is defined and static.
/**
 * Represents an option component.
 * @param {object} props
 * @return {JSX}
 */
function Option(props) {
  if (!props.color) {
    props.color = 'green';
  }

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
            width: roundTo(props.percentage, 1).toString() + '%',
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

Option.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Option;
