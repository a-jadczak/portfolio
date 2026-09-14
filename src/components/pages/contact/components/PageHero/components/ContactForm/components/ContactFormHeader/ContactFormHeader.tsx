import styles from './ContactFormHeader.module.scss';

const ContactFormHeader = () => (
  <div className={styles.header} aria-hidden="true">
    <span>contact@portfolio:~</span>
    <div className={styles.circleContainer}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  </div>
);

export default ContactFormHeader;
