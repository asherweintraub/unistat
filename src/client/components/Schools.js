import React from 'react';

import Card from './Card';
import School from './School';

const Schools = ({ schools, options }) => {

  return (
    <>
      {schools.map((school, i) => <School key={i} school={school} options={options} />)}
    </>
  );
}

export default Schools;
