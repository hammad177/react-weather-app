/** @format */

import React from 'react';

const TimeAndDate = ({ current_date_day }) => {
  const date = new Date(current_date_day * 1000);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const current_day = days[date.getDay()];
  const current_date = `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
  return (
    <>
      <p className='text-center mt-3 h4'>
        {current_day ? <span>{current_day}</span> : 'Day'}
      </p>
      <p className='text-center mb-1 h4'>
        {current_date_day ? <span>{current_date}</span> : 'DD MM YYYY'}
      </p>
    </>
  );
};

export default TimeAndDate;
