import React from 'react';

import Card from './Card';
import School from './School';

const Schools = ({ schools }) => {

  return (
    <>
      {schools.map((school, i) => <School key={i} school={school} />)}
    </>
  );
}

export default Schools;
