import type { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.scss';

export type AppearanceProps = {
  variant?: 'default' | 'primary' | 'link';
  iconOnly?: boolean;
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> & AppearanceProps;

export function Button({
  children,
  variant = 'default',
  iconOnly = false,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.button} ${className}`}
      data-variant={variant}
      data-icon-only={iconOnly || undefined}
    >
      {children}
    </button>
  );
}
