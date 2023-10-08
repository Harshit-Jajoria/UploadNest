import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { useSelector } from 'react-redux';

import MyFiles from './pages/MyFiles';

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
          <Route path="/myfiles" element={isAuth ? <MyFiles /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
