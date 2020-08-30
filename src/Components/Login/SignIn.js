import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../Form/Input';
import styles from './SignIn.module.css';
import Button from '../Form/Button';
import { NavLink, Routes, Route } from 'react-router-dom';
import LostPassword from './LostPassword';

const SignIn = () => {
  const email = useForm('email');
  const password = useForm('senha');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className={styles.form}>
        <Input
          id="email"
          label="E-mail"
          type="text"
          required="required"
          {...email}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          required="required"
          {...password}
        />
        <NavLink to="recsenha" element={<LostPassword />}>
          Esqueci minha senha
        </NavLink>
        <Button>ENTRAR</Button>
      </form>
      <Routes>
        <Route path="recsenha" element={<LostPassword />} />
      </Routes>
    </>
  );
};

export default SignIn;
