import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { useSelector } from 'react-redux';
import Solution from './pages/Solution';
import Scoreboard from './pages/Scoreboard';
import AddQuestion from './pages/AddQuestion';
import MyFiles from './pages/MyFiles';

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />   
          <Route path="/home" element={<Home />} /> 
          <Route path="/myfiles" element={<MyFiles />} />   
  

          
          



        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
