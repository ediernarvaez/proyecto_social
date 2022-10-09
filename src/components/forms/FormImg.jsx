/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from '../assets/svg/image';

function FormImg(props) {
  return (
    <div className="relative">
      <label htmlFor={props.htmlFor} className={props.className}>
        <span>
          <Image />
        </span>
        <span>{props.text}</span>
        <input type={props.file} id={props.id} {...props} className="sr-only" />
      </label>
    </div>
  );
}

export default FormImg;
