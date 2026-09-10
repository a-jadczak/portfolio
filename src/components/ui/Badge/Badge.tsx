import styles from './Badge.module.scss';

const Badge = ({ title }: { title: string }) => {
  return <div className={styles.badge}>{title}</div>;
};

export default Badge;
