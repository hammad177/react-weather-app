/** @format */

import React from 'react';

const AreaAndWeatherType = ({ weather_icon, weather_city, weather_type }) => {
  return (
    <>
      <p className='text-center h4 mb-0'>{weather_city || 'City'}</p>
      <p className='text-center h5 fw-lighter mb-0'>
        {weather_type || 'Type'}
        {weather_icon ? (
          <img
            src={`http://openweathermap.org/img/wn/${weather_icon}.png`}
            alt='icon'
          />
        ) : (
          ''
        )}
      </p>
    </>
  );
};

export default AreaAndWeatherType;
