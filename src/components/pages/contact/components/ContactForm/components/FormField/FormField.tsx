import type { ReactNode } from 'react';
import styles from './FormField.module.scss';

type FormFieldProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
};

const FormField = ({ children, htmlFor, label }: FormFieldProps) => (
  <label className={styles.label} htmlFor={htmlFor}>
    <span className={styles.labelContent}>{label}: </span>
    {children}
  </label>
);

export default FormField;
