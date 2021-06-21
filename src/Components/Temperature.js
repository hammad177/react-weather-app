/** @format */

import React from 'react';

const Temperature = ({ temp, feels_like }) => {
  const currrent_temp = Math.round(temp);
  const feel_like = Math.round(feels_like);
  return (
    <>
      <p
        className='text-center fw-bold m-0 text-warning'
        style={{ fontSize: '5rem' }}>
        {currrent_temp || 'Temp'}&deg;c
      </p>
      <p className='text-center h6'>Feels like {feel_like || 'temp'}&deg;c</p>
    </>
  );
};

export default Temperature;
