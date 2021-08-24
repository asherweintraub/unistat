import React from 'react';

const GradeMarker = (props) => {

  return (
    <div className={`text-2xl rounded-full w-14 h-14 font-bold bg-white border-2 border-green-700 p-2 flex justify-center items-center text-green-700 ${props.className}`}>{ props.children }</div>
  )
}

export default GradeMarker;
