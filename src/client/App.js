import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Schools from './components/Schools';

import Card from './components/Card';

const App = () => {
  const [schools, setSchools] = useState([]);

  return (
    <div className="flex flex-col items-center justify-start bg-blue-900 min-h-screen p-8">
      <Header />
      { schools.length
        ? <Schools schools={schools} />
        : <Login setSchools={setSchools} />
      }
    </div>
  );
}

export default App;
