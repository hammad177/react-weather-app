/** @format */

import rain from '../Images/Rain.jpg';
import ash from '../Images/Ash.png';
import clear from '../Images/Clear.jpg';
import clouds from '../Images/Clouds.jpg';
import defaultBg from '../Images/default-bg.jpg';
import drizzle from '../Images/Drizzle.jpg';
import dust from '../Images/Dust.jpg';
import smoke from '../Images/Smoke.jpg';
import snow from '../Images/Snow.jpg';
import thunderstrom from '../Images/Thunderstrom.jpg';
import torando from '../Images/Torando.jpg';
import haze from '../Images/Haze.jpg';
import fog from '../Images/Fog.jpg';
import mist from '../Images/Mist.jpg';
import sand from '../Images/Sand.jpg';
import squall from '../Images/Squall.jpg';

const Background = [
  rain,
  ash,
  clear,
  clouds,
  drizzle,
  dust,
  smoke,
  snow,
  thunderstrom,
  torando,
  haze,
  fog,
  mist,
  sand,
  squall
];

const ChangeBackground = ({ weather_type }) => {
  const Background_Image = Background.filter((type) =>
    type.includes(weather_type)
  );
  const imagePresent = Background_Image.length !== 0;
  return (
    <div
      style={{
        backgroundImage: `url(${imagePresent ? Background_Image : defaultBg})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
        transition: 'all 2s ease-in-out '
      }}
    />
  );
};

export default ChangeBackground;
