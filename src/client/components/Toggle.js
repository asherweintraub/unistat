import React from 'react';

const Toggle = ({ name, checked, changeOption }) => {

  return (
    <label className="cursor-pointer text-lg inline-flex items-center px-3 py-0.5 rounded-xl hover:bg-gray-100 transition-colors">{name}<input type="checkbox" name={name} checked={checked} onChange={e => changeOption(e)} className="w-5 h-5 ml-2 cursor-pointer" /></label>
  );
}

export default Toggle;
