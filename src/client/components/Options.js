import React from 'react';

import Toggle from './Toggle';

const Options = ({ options, setOptions }) => {
  const changeOption = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.checked
    });
  }

  return (
    <div className="flex justify-center w-full">
      {Object.entries(options).map(([name, checked], i) => <Toggle key={i} name={name} checked={checked} changeOption={changeOption} />)}
    </div>
  );
}

export default Options;
