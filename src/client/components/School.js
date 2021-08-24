import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

import Card from './Card';

const School = ({ school, options }) => {

  return (
    <Card>
      <div className="w-full grid grid-cols-fit-28 gap-3 grid-flow-row-dense">
        {Array.from(options).map((option) => <>{option[1][0] ? option[1][1](school) : null}</>)}
      </div>
      <a href={school.url} className="text-sm w-full italic mt-3">see on Niche...</a>
    </Card>
  );
}

export default School;
