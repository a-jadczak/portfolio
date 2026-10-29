import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './Textarea.module.scss';

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  error?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error = false, disabled = false, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        disabled={disabled}
        className={`${styles.textarea} ${error ? styles.error : ''} ${className}`}
      />
    );
  }
);

export default Textarea;
