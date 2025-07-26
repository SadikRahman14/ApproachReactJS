import './App.css'
import React, { useEffect, useState } from 'react'
import authService from "./appwrite/auth.appwrite.js";
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components/index.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-col justify-between bg-gray-400'>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center text-white text-xl">
      Loading...
    </div>
  );
}

export default App;
