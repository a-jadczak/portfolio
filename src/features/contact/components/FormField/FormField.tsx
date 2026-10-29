import type { ReactNode } from 'react';
import type { FormState } from '@/features/contact/types/FormState';
import styles from './FormField.module.scss';

type FormFieldProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
  state?: FormState;
  className?: string;
};

const FormField = ({
  children,
  htmlFor,
  label,
  state = 'idle',
  className = '',
}: FormFieldProps) => (
  <div className={`${styles.field} ${className}`} data-state={state}>
    <label className={styles.label} htmlFor={htmlFor}>
      {label}
    </label>
    {children}
  </div>
);

export default FormField;
