/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function FormText(props) {
  return (
    <input
      className={props.className}
      id={props.id}
      type={props.type}
      // value={props.value}
      // onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}

export default FormText;
