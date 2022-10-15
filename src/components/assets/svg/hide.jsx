/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Hide(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} {...props}>
      <path d="M35 30.292L32.208 27.5V7.792H12.5L9.708 5h22.5q1.125 0 1.959.833.833.834.833 1.959zm-1.625 7.375L30.708 35H7.792q-1.125 0-1.959-.833Q5 33.333 5 32.208V9.292L2.375 6.625l1.958-1.958 31.042 31.041zm-23.5-9.25l4.917-6.459 3.833 5.209L20.5 24.75 7.792 12.042v20.166h20.166l-3.791-3.791zm12.5-10.792zm-4.5 4.5z" />
    </svg>
  );
}

export default Hide;
