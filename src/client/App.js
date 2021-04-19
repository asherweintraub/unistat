import React, { useState } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import Login from './components/Login';
import Schools from './components/Schools';

import Card from './components/Card';

const App = () => {
  const [schools, setSchools] = useState([]);
  const [options, setOptions] = useState({
    images: true
  });

  return (
    <div className="flex flex-col items-center justify-start bg-blue-900 min-h-screen p-8">
      <Header>
        <Options options={options} setOptions={setOptions} />
      </Header>
      { schools.length
        ? <Schools schools={schools} options={options} />
        : <Login setSchools={setSchools} />
      }
    </div>
  );
}

export default App;
