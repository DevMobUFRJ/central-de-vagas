import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';

const LostPassword = () => {
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
  }

  const estilo = {
    marginTop: '60px',
    marginBottom: '60px',
    textAlign: 'center',
  };

  return (
    <div>
      <h2 style={estilo}>Recuperar Senha</h2>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="E-mail"
          type="text"
          required="required"
          {...email}
        />
        <Button>ENVIAR</Button>
      </form>
    </div>
  );
};

export default LostPassword;
