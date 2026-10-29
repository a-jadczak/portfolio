import { forwardRef, isValidElement, type ComponentPropsWithoutRef } from 'react';
import type { Icon } from '@/types/Icon';
import styles from './Input.module.scss';

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  startIcon?: Icon;
  iconClassName?: string;
  containerClassName?: string;
  error?: boolean;
};

const renderIcon = (icon: Icon, className?: string) => {
  if (!icon) return null;
  if (isValidElement(icon)) {
    return (
      <span className={className} aria-hidden="true">
        {icon}
      </span>
    );
  }
  const IconComponent = icon;
  return <IconComponent size={20} className={className} aria-hidden="true" />;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      startIcon,
      iconClassName = '',
      containerClassName = '',
      className = '',
      error = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={`${styles.container} ${disabled ? styles.disabled : ''} ${error ? styles.error : ''} ${containerClassName}`}
      >
        {startIcon && renderIcon(startIcon, `${styles.icon} ${iconClassName}`)}
        <input
          {...props}
          ref={ref}
          disabled={disabled}
          className={`${styles.input} ${className}`}
        />
      </div>
    );
  }
);

export default Input;
