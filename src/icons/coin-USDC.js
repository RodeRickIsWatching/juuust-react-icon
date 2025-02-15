import React from 'react';
import PropTypes from 'prop-types';

const CoinUsdc = (props) => {
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
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#2775CA"
      ></path>
      <path
        d="M9.75 20.344c0 .281-.225.44-.488.356A8.998 8.998 0 013 12.122a9.007 9.007 0 016.262-8.578c.272-.085.488.075.488.356v.703c0 .188-.14.403-.319.469C6.553 6.132 4.5 8.897 4.5 12.122a7.498 7.498 0 004.931 7.04.537.537 0 01.319.47v.712z"
        fill="#fff"
      ></path>
      <path
        d="M12.75 17.747a.376.376 0 01-.375.375h-.75a.376.376 0 01-.375-.375v-1.181c-1.64-.225-2.438-1.135-2.653-2.391a.346.346 0 01.347-.403h.853a.38.38 0 01.365.3c.16.74.591 1.312 1.904 1.312.965 0 1.659-.543 1.659-1.35 0-.806-.403-1.115-1.828-1.35-2.1-.28-3.094-.918-3.094-2.559 0-1.266.966-2.26 2.447-2.466V6.497c0-.206.169-.375.375-.375h.75c.206 0 .375.169.375.375v1.19c1.21.216 1.978.9 2.231 2.044a.344.344 0 01-.347.413h-.787a.371.371 0 01-.356-.272c-.216-.722-.732-1.04-1.632-1.04-.993 0-1.509.477-1.509 1.152 0 .713.29 1.07 1.819 1.285 2.062.281 3.131.872 3.131 2.625 0 1.331-.994 2.41-2.54 2.653v1.2h-.01z"
        fill="#fff"
      ></path>
      <path
        d="M14.738 20.7c-.272.084-.488-.075-.488-.356v-.703c0-.207.122-.403.319-.47 2.868-1.05 4.931-3.815 4.931-7.04a7.498 7.498 0 00-4.931-7.04.537.537 0 01-.319-.47V3.92c0-.281.225-.44.488-.356A8.966 8.966 0 0121 12.122a8.998 8.998 0 01-6.262 8.578z"
        fill="#fff"
      ></path>
    </svg>
  );
};

CoinUsdc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CoinUsdc.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default CoinUsdc;
