import React from 'react';
import styles from './Button.module.css';
import { Loader2 } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  isLoading = false,
  icon = null,
  iconPosition = 'left',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${styles.customBtn} btn btn-${variant} ${className}`}
      aria-disabled={disabled || isLoading}
    >
      {isLoading && <Loader2 className={styles.loadingIcon} />}
      {!isLoading && icon && iconPosition === 'left' && icon}
      {children}
      {!isLoading && icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
