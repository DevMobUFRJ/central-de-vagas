import React from 'react';
import './../../App.css';
import styles from './Login.module.css';
import SignIn from './SignIn';
import Signup from './Signup';
import { NavLink, Route, Switch } from 'react-router-dom';
import LostPassword from './LostPassword';

const Login = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>
          Central de <br></br>
          Vagas
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          tempore harum nostrum quisquam quo quae? Minus nam, id ipsum incidunt,
          veniam itaque voluptatum illum architecto quos fugit at voluptate
          aspernatur?
        </p>
      </div>
      <div className={styles.rightPanel}>
        <nav>
          <ul>
            <NavLink to="signin" activeClassName={styles.active}>
              <li className={styles.left}>Login</li>
            </NavLink>

            <NavLink to="signup" activeClassName={styles.active}>
              <li className={styles.right}>Cadastro</li>
            </NavLink>
          </ul>
        </nav>
        <div className={styles.content}>
          <Switch>
            <Route exact path="/login/signin" children={<SignIn />} />
            <Route exact path="/login/signup" children={<Signup />} />
            <Route exact path="/login/recsenha" children={<LostPassword />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Login;
