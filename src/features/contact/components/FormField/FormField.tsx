import type { ReactNode } from 'react';
import type { FormState } from '@/features/contact/types/FormState';
import styles from './FormField.module.scss';

type FormFieldProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
  state: FormState;
};

const FormField = ({ children, htmlFor, label, state }: FormFieldProps) => (
  <label className={styles.label} htmlFor={htmlFor} data-state={state}>
    <span className={styles.labelContent}>{label}: </span>
    {children}
  </label>
);

export default FormField;
