import React from 'react';

const Card = (props) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray shadow-md rounded-xl bg-white p-6 w-11/12 md:w-5/6 lg:w-2/5 my-2">
      {props.children}
    </div>
  );
}

export default Card;
