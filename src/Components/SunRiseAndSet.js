/** @format */

import React from 'react';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const SunRiseAndSet = ({ sun_rise, sun_set }) => {
  const sunrise = new Date(sun_rise * 1000);
  const sunset = new Date(sun_set * 1000);

  const rise = sunrise.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const set = sunset.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  return (
    <div className='container text-center mb-2'>
      <div className='row'>
        <div className='col'>
          <IconContext.Provider value={{ size: '2rem' }}>
            {sun_rise ? <span>{rise}</span> : ''}
            <WiSunrise />
          </IconContext.Provider>
        </div>
        <div className='col'>
          <IconContext.Provider value={{ size: '2rem' }}>
            {sun_set ? <span>{set}</span> : ''}
            <WiSunset />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default SunRiseAndSet;
