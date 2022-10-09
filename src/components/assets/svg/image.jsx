/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Image(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M14 3v2H5v14h14v-9h2v9q0 .825-.587 1.413Q19.825 21 19 21H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3zm5 0v2h2v2h-2v2h-2V7h-2V5h2V3zM6 17h12l-3.75-5-3 4L9 13zM5 5v14V5z" />
    </svg>
  );
}

export default Image;
