import type { ComponentPropsWithoutRef } from 'react';
import { Check } from 'lucide-react';
import styles from './Checkbox.module.scss';

export type CheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'children'> & {
  label: string;
};

const Checkbox = ({ label, className = '', ...props }: CheckboxProps) => (
  <label className={`${styles.checkbox} ${className}`}>
    <input {...props} type="checkbox" className={styles.input} />
    <span className={styles.box} aria-hidden="true">
      <Check className={styles.check} size={14} strokeWidth={3} />
    </span>
    <span className={styles.label}>{label}</span>
  </label>
);

export default Checkbox;
