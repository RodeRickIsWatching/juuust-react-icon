import React from 'react';
import PropTypes from 'prop-types';

const CoinBtc = (props) => {
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
      <circle cx="12" cy="12" r="12" fill="#FFA800"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.117 10.645c-.126.868-.58 1.394-1.362 1.576.513.266.861.607 1.045 1.023.184.416.166.94-.055 1.574a2.721 2.721 0 01-.443.817 1.988 1.988 0 01-.605.51 2.365 2.365 0 01-.78.242 4.25 4.25 0 01-.908.031 8.677 8.677 0 01-1.043-.147l-.44 1.783-1.077-.266.434-1.755a40.144 40.144 0 01-.851-.218l-.436 1.762-1.077-.267.441-1.782c-.084-.02-.21-.053-.376-.097a31.266 31.266 0 00-.384-.098l-1.398-.346.533-1.226.776.192c.233.058.397-.027.494-.256l.694-2.81.112.028a.736.736 0 00-.11-.035l.496-2.006c.018-.332-.15-.542-.504-.63l-.776-.191.283-1.146 1.48.373c.299.074.525.127.68.16l.436-1.76 1.076.266-.427 1.726c.385.085.67.15.856.197l.424-1.713 1.076.267-.435 1.761c.36.124.673.257.94.4.266.142.503.312.712.51.208.197.355.426.441.687.087.261.106.549.058.864zm-2.445 3.437a.96.96 0 00.005-.473 1.08 1.08 0 00-.179-.386 1.367 1.367 0 00-.349-.312 3.5 3.5 0 00-.426-.243 4.256 4.256 0 00-.501-.19 7.718 7.718 0 00-.93-.245l-.334-.075-.584 2.362.258.068a9.247 9.247 0 001.124.24c.116.017.254.03.412.04.159.01.296.008.413-.002.116-.011.239-.033.368-.065a.995.995 0 00.328-.141c.09-.062.17-.141.24-.238a.952.952 0 00.155-.34zm.34-3.88a.945.945 0 01-.014.43.999.999 0 01-.15.341.694.694 0 01-.256.223 1.987 1.987 0 01-.305.124 1.22 1.22 0 01-.371.046 7.307 7.307 0 01-.38-.012 3.049 3.049 0 01-.393-.057 7.449 7.449 0 01-.678-.153 27.75 27.75 0 00-.24-.063l.53-2.146a27.94 27.94 0 00.656.152c.101.022.235.061.401.117.167.056.306.11.416.162.111.053.23.123.356.21.127.09.223.182.287.28.065.097.112.213.141.346z"
        fill="#fff"
      ></path>
    </svg>
  );
};

CoinBtc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CoinBtc.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default CoinBtc;
