import React from 'react';

import Card from './Card';

const Login = () => {
  return (
    <Card>
      <img src="https://d33a4decm84gsn.cloudfront.net/static/favicons/favicon-192.png" className="h-16"/>
      <h1 className="text-2xl font-bold mb-3  flex items-center">Niche Login</h1>

      <form className="flex flex-col items-start">
        <input type="text" name="username" placeholder="username" className="py-1 px-2 shadow-inner focus:shadow-none transition-shadow border border-black rounded-lg mb-2" />
        <input type="password" name="password" placeholder="password" className="py-1 px-2 shadow-inner focus:shadow-none transition-shadow border border-black rounded-lg mb-2" />
        <input type="submit" className="p-2 text-sm  shadow-md active:shadow-none transition-shadow rounded-lg text-white bg-black hover:cursor-pointer" />
      </form>
    </Card>
  );
}

export default Login;
