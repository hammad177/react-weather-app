/** @format */

import axios from 'axios';
import { useState } from 'react';
import './App.css';
import TimeAndDay from './Components/TimeAndDay';
import Temperature from './Components/Temperature';
import AreaAndWeatherType from './Components/AreaAndWeatherType';
import WeatherOtherDeatails from './Components/WeatherOtherDeatails';
import SunRiseAndSet from './Components/SunRiseAndSet';
import Warning from './Components/Warning';
import ChangeBackground from './Components/ChangeBackground';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [warning, setWarning] = useState(false);
  const [errorMessage, setErrorMessge] = useState('');

  const Api = {
    base: 'https://api.openweathermap.org/data/2.5/weather',
    key: '230fef974b63ccad5c2138922111802e'
  };

  const search = async (e) => {
    if (e.key === 'Enter') {
      if (query === '') {
        setWarning(true);
        setErrorMessge('Enter some place');
      } else {
        try {
          const result = await axios.get(
            `${Api.base}?q=${query}&appid=${Api.key}&mode=JSON&units=metric`
          );
          const data = result.data;
          let api_data = {
            city: data.name,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            main: data.weather[0].main,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            sun_rise: data.sys.sunrise,
            sun_set: data.sys.sunset,
            current_date: data.dt,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: data.wind.speed
          };
          setWeather(api_data);
        } catch (err) {
          setErrorMessge(err.response.data.message);
          setWarning(true);
        }
      }
      setQuery('');
    }
  };

  const getValue = (e) => {
    const value = e.target.value;
    const regMatch = /^[a-zA-Z]*$/.test(value);
    const space = /\s/.test(value);
    if (regMatch || space) {
      setQuery(value);
    }
    setWarning(false);
  };

  return (
    <div
      id='main'
      className='container-fluid vh-100 vw-100 text-light d-flex align-item-center justify-content-center'>
      <ChangeBackground weather_type={weather.main} />
      {warning && (
        <Warning setWarning={setWarning} errorMessage={errorMessage} />
      )}
      <div className='vh-100'>
        <div className='container d-flex flex-column' id='detail'>
          <p className='h1 text-center my-3 fw-lighter'>
            Weather Report Widget
          </p>
          <input
            type='text'
            onChange={getValue}
            value={query}
            onKeyPress={search}
            className='w-75 m-auto form-control border-0 mb-2 fw-bold'
          />
          <div className=' mb-2 rounded' id='weather-detail'>
            <TimeAndDay current_date_day={weather.current_date} />
            <Temperature temp={weather.temp} feels_like={weather.feels_like} />
            <AreaAndWeatherType
              weather_icon={weather.icon}
              weather_city={weather.city}
              weather_type={weather.main}
            />
            <SunRiseAndSet
              sun_rise={weather.sun_rise}
              sun_set={weather.sun_set}
            />
            <WeatherOtherDeatails
              weather_humidity={weather.humidity}
              weather_wind={weather.wind}
              weather_pressure={weather.pressure}
            />
          </div>
          <p className='text-center text-wrap fw-lighter mb-2'>
            Weather Report Widget &copy; 2021. Develop by Hammad Shaukat
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
