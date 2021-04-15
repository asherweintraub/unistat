import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/outline';

import Card from './Card';

class Header extends Card {
  render() {
    return (
      <div className={`${this.classes}`}>
        <AcademicCapIcon className="h-16"/>
        <h1 className="text-4xl font-bold mb-3">Unistat</h1>
        <p className="text-left w-full">lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.</p>
      </div>
    )
  }
}

export default Header;
