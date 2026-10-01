import styles from './Divider.module.scss';

type DividerProps = {
  className?: string;
};

const Divider = ({ className = '' }: DividerProps) => (
  <div className={[styles.divider, className].filter(Boolean).join(' ')} aria-hidden="true" />
);

export default Divider;
