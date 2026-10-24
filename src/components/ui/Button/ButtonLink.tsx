import type { ComponentPropsWithoutRef } from 'react';
import type { AppearanceProps } from './Button';
import styles from './Button.module.scss';

export type ButtonLinkProps = ComponentPropsWithoutRef<'a'> &
  AppearanceProps & {
    href: string;
  };

export function ButtonLink({
  children,
  variant = 'default',
  iconOnly = false,
  className = '',
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      href={href}
      className={`${styles.button} ${className}`}
      data-variant={variant}
      data-icon-only={iconOnly || undefined}
    >
      {children}
    </a>
  );
}
