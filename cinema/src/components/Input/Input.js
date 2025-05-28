import React from 'react';
import styles from './Input.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
  variant = 'default',
  label = '',
  disabled = false,
  ...props
}) => {
  return (
    <div className={styles.inputGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${styles[variant]} ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
