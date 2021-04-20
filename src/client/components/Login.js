import React, { useState } from 'react';
import { RefreshIcon } from '@heroicons/react/outline'

import Card from './Card';

const Login = ({ setSchools }) => {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/list/?username=${formData.username}&password=${formData.password}`, { method: 'GET' });
    const list = await res.json();

    setSchools(list);
  }

  return (
    <Card>
      <img src="https://d33a4decm84gsn.cloudfront.net/static/favicons/favicon-192.png" className="h-16"/>
      <h1 className="text-2xl font-bold mb-3 flex items-center">Niche Login</h1>

      { !loading
        ? <form onSubmit={e => handleSubmit(e)} className="flex flex-col items-start">
            <input type="text" name="username" placeholder="username" onChange={e => handleChange(e)} className="py-1 px-2 shadow-inner focus:shadow-none transition-shadow border border-black rounded-lg mb-2" />
            <input type="password" name="password" placeholder="password" onChange={e => handleChange(e)} className="py-1 px-2 shadow-inner focus:shadow-none transition-shadow border border-black rounded-lg mb-2" />
            <input type="submit" className="p-2 text-sm  shadow-md active:shadow-none transition-shadow rounded-lg text-white bg-black hover:cursor-pointer" />
          </form>
        : <RefreshIcon className="h-6 animate-spin"/>
      }
    </Card>
  );
}

export default Login;
