import React from 'react';

const types = {
  name: {
    regex: /^[a-zA-Z ]+$/,
    errorMsg: 'Nome inválido',
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMsg: 'E-mail inválido',
  },
  senha: {
    regex: /(?=.{6,})/,
    errorMsg: 'Senha inválida - min 6 carac.',
  },
};

const useForm = (type) => {
  const [erro, setErro] = React.useState(null);
  const [value, setValue] = React.useState('');

  function validateInput(value) {
    if (value.length === 0) {
      setErro('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].errorMsg);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (erro) validateInput(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    erro,
    onChange,
    onBlur: () => validateInput(value),
    validateInput: () => validateInput(value),
  };
};

export default useForm;
