/** @format */

import React from 'react';
import { WiHumidity, WiWindy } from 'react-icons/wi';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import { IconContext } from 'react-icons';

const WeatherOtherDeatails = ({
  weather_humidity,
  weather_wind,
  weather_pressure
}) => {
  let wind = weather_wind * 3.2;
  let speed = wind.toFixed(2);
  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col'>
          <IconContext.Provider value={{ size: '2rem' }}>
            <WiHumidity />
          </IconContext.Provider>
          {weather_humidity}
        </div>
        <div className='col'>
          <IconContext.Provider value={{ size: '2rem' }}>
            <WiWindy />
          </IconContext.Provider>
          {weather_wind ? <span>{speed}</span> : ''}
        </div>
        <div className='col'>
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <RiDownloadCloud2Line />
          </IconContext.Provider>{' '}
          {weather_pressure}
        </div>
      </div>
    </div>
  );
};

export default WeatherOtherDeatails;
