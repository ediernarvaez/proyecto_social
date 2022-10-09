/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  return (
    <button className={props.className} type={props.type} {...props}>
      {props.text}
    </button>
  );
}

export default Button;
