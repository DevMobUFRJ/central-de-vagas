import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Components/Login/Signup';
import SignIn from './Components/Login/SignIn';
import LostPassword from './Components/Login/LostPassword';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login/signin/" />
          </Route>
          <Route path="/login/*" children={<Login />} />
          <Route path="/signin" children={<SignIn />} />
          <Route path="/signup" children={<Signup />} />
          <Route path="recsenha" children={<LostPassword />} />
          <Route path="*" children={<NotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
