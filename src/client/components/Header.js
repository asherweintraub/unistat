import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/outline';

import Card from './Card';

const Header = (props) => {

  return (
    <Card>
      <AcademicCapIcon className="h-16"/>
      <h1 className="text-4xl font-bold mb-3">Unistat</h1>
      <p className="text-left w-full">lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.</p>
      { props.children
        ? <>
          <hr className="w-full my-3"/>
          { props.children }
        </>
        : null
      }
    </Card>
  );
}

export default Header;
