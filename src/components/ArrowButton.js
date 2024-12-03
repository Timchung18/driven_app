import React from 'react';
import PropTypes from 'prop-types';

const ArrowButton = ({ size, arrowColor, backgroundColor }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-full shadow-md`}
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 35 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="35"
          y="0.489502"
          width="35"
          height="35"
          rx="17.5"
          transform="rotate(90 35 0.489502)"
          fill={backgroundColor}
        />
        <path
          d="M18.0769 11.0664L25 17.9895L18.0769 24.9126M24.0385 17.9895L10 17.9895"
          stroke={arrowColor}
          strokeWidth="2.30769"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
};

ArrowButton.propTypes = {
  size: PropTypes.string,
  arrowColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ArrowButton.defaultProps = {
  size: '35px',
  arrowColor: '#121212',
  backgroundColor: '#FFFFFF',
};

export default ArrowButton;
