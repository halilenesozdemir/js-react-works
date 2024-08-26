import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // Ask me how do i know if I copy my value. That's answer... A tiny alert text.
  const [alert, setAlert] = useState(false);
  // I want to seperate rgb values one by one and each of them seperated by comma
  const bcg = rgb.join(',');

  // Second Method -> If you want to use this, research function and implement...
  /*   const hex = rgbToHex(...rgb); */

  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 5 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue).then(() => setAlert(true));
      }}>
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'> copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
