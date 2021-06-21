/** @format */

import React from 'react';

const Warning = ({ setWarning, errorMessage }) => {
  return (
    <div
      className='alert alert-danger m-auto mt-4 d-flex justify-content-between position-absolute top-0 start-50 translate-middle-x'
      style={{ width: '330px' }}>
      <p className='m-0 px-2'>
        <strong>Warning!</strong> {errorMessage} ...
      </p>
      <button
        className='button btn-close'
        onClick={() => setWarning(false)}></button>
    </div>
  );
};

export default Warning;
