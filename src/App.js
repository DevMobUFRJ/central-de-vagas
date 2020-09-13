import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Login/Signup';
import SignIn from './Components/Login/SignIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="signin/*" element={<SignIn />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
