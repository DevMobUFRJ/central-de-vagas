import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, ...props }, message) => {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
