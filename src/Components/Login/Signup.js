import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../Form/Input';
import styles from './SignIn.module.css';
import Button from '../Form/Button';

const Signup = () => {
  const email = useForm('email');
  const password = useForm('senha');
  const confPassword = useForm('senha');

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
        <Input
          id="confpassword"
          label="Confirme a senha"
          type="password"
          required="required"
          {...confPassword}
        />
        <Button>PRÓXIMO</Button>
      </form>
    </>
  );
};

export default Signup;
