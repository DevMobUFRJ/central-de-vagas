import React from 'react';
import styles from './NotFound.module.css';
import logo from './../../img/logo@512w.png';
import Button from '../Form/Button';

const NotFound = () => {
  return (
    <div className={styles.pag}>
      <h1 className={styles.title}>Página Não Encontrada</h1>
      <p className={styles.text}>
        Desculpe, a página solicitada não pode ser encontrada
      </p>
      <img src={logo} alt="Logo" className={styles.imagem}></img>
      <div className={styles.btn}>
        <Button>Início</Button>
      </div>
    </div>
  );
};

export default NotFound;
