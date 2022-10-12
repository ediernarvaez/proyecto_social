/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Library(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M13 14h2v-3h3V9h-3V6h-2v3h-3v2h3zm-5 4q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18zm0-2h12V4H8v12zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V6h2v14h14v2zM8 4v12V4z" />
    </svg>
  );
}

export default Library;
