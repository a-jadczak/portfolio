import type { ComponentPropsWithoutRef } from 'react';
import styles from './Text.module.scss';

interface Props extends ComponentPropsWithoutRef<'p'> {
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'muted';
}

const Text = ({
  size = 'medium',
  variant = 'primary',
  className,
  children,
  ...attributes
}: Props) => (
  <p
    {...attributes}
    className={[styles.text, styles[size], styles[variant], className].filter(Boolean).join(' ')}
  >
    {children}
  </p>
);

export default Text;
