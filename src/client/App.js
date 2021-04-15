import React from 'react';
import Header from './components/Header';
import Login from './components/Login';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-900 min-h-screen p-8">
      <Header />
      <Login />
    </div>
  );
}

export default App;
