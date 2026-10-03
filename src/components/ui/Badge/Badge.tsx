import styles from './Badge.module.scss';

type BadgeProps = {
  title: string;
  variant?: 'default' | 'secondary';
  className?: string;
};

const Badge = ({ title, variant = 'default', className = '' }: BadgeProps) => {
  return <div className={`${styles.badge} ${styles[variant]} ${className}`}>{title}</div>;
};

export default Badge;
