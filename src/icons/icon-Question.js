import React from 'react';
import PropTypes from 'prop-types';

const IconQuestion = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.172c-5.427 0-9.828 4.4-9.828 9.828 0 5.428 4.4 9.828 9.829 9.828 5.427 0 9.828-4.4 9.828-9.828 0-5.428-4.4-9.828-9.829-9.828zM.58 12C.579 5.692 5.692.578 12 .578 18.31.578 23.422 5.692 23.422 12c0 6.308-5.113 11.422-11.421 11.422C5.692 23.422.579 18.308.579 12zm10.625 5.312c0-.44.357-.796.797-.796h.01a.797.797 0 110 1.593h-.01a.797.797 0 01-.797-.797zm-.5-9.503a2.39 2.39 0 013.602 2.065c0 .64-.49 1.23-1.239 1.728a6.69 6.69 0 01-1.383.697l-.019.007h-.003a.797.797 0 00.505 1.512l-.252-.756.253.756h.002l.003-.002.01-.003.035-.012.118-.044a8.292 8.292 0 001.615-.829c.845-.563 1.948-1.567 1.949-3.053a3.984 3.984 0 00-7.743-1.327.797.797 0 001.503.529 2.39 2.39 0 011.044-1.268z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconQuestion.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconQuestion;
