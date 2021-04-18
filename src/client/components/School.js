import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

import Card from './Card';

const School = ({ school }) => {
  // title, status, url, img
  return (
    <Card>
      <img src={school.img} alt={school.title + " cover image"} className="mb-2"/>
      <a href={school.url} className="group text-2xl font-bold w-full mb-3">{school.title}<ArrowRightIcon className="inline h-5 ml-1 transform -translate-x-0.5 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all"/></a>
    </Card>
  );
}

export default School;
