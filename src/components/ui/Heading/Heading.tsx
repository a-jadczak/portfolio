import type { ComponentPropsWithoutRef } from 'react';
import styles from './Heading.module.scss';

type HeadingProps = ComponentPropsWithoutRef<'h2'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'extra-small' | 'small' | 'medium' | 'large';
};

const Heading = ({
  as: Tag = 'h2',
  size = 'medium',
  className = '',
  children,
  ...props
}: HeadingProps) => (
  <Tag {...props} className={`${styles.heading} ${styles[size]} ${className}`}>
    {children}
  </Tag>
);

export default Heading;
