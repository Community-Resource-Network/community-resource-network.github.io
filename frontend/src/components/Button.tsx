import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
}

