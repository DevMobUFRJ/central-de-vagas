import React from 'react';
import styles from './Input.module.css';

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  erro,
  placeholder,
}) => {
  console.log(erro);
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.myLabel}>
        {label}
      </label>
      <input
        className={styles.myField}
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {erro && <p className={styles.errorMsg}>{erro}</p>}
    </div>
  );
};

export default Input;
