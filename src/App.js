import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Login/Signup';
import SignIn from './Components/Login/SignIn';
import LostPassword from './Components/Login/LostPassword';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="signin/*" element={<SignIn />} />
          <Route path="signup" element={<Signup />} />
          <Route path="recsenha" element={<LostPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
