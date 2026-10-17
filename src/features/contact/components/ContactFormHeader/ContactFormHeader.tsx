import styles from './ContactFormHeader.module.scss';
import type { FormState } from '@/features/contact/types/FormState';

const ContactFormHeader = ({ state }: { state: FormState }) => (
  <div className={styles.header} aria-hidden="true" data-send={state}>
    <span>contact@portfolio:~</span>
    <div className={styles.circleContainer}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  </div>
);

export default ContactFormHeader;
