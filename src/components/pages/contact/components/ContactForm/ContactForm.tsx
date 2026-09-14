import { Send } from 'lucide-react';
import Button from '@/components/ui/Button/Button';
import styles from './ContactForm.module.scss';
import type { SubmitEventHandler } from 'react';

const ContactForm = () => {
  const handleFormSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log('Form submitted:', event.currentTarget);
  };

  return (
    <div className={`clipped-corners ${styles.container}`} aria-label="Contact form">
      <div className={styles.containerTitle} aria-hidden={true}>
        <span>contact@portfolio:~</span>
        <div className={styles.circleContainer} aria-hidden={true}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label className={styles.label} htmlFor="name">
          <span className={styles.labelContent}>name: </span>
          <input
            className={styles.input}
            type="text"
            placeholder="John Pork"
            id="name"
            name="name"
          />
        </label>
        <label className={styles.label} htmlFor="email">
          <span className={styles.labelContent}>email: </span>
          <input
            className={styles.input}
            type="email"
            placeholder="you@example.com"
            id="email"
            name="email"
          />
        </label>
        <label className={styles.label} htmlFor="subject">
          <span className={styles.labelContent}>subject: </span>
          <input
            className={styles.input}
            type="text"
            placeholder="What's this about?"
            id="subject"
            name="subject"
          />
        </label>
        <label className={styles.label} htmlFor="message">
          <span className={styles.labelContent}>message: </span>
          <textarea
            className={`clipped-corners ${styles.messageContainer}`}
            rows={5}
            id="message"
            name="message"
            placeholder="Tell me about your project..."
          ></textarea>
        </label>
        <Button
          as="button"
          text="Send message"
          variant="primary"
          Icon={Send}
          type="submit"
          style={{ width: '100%' }}
        />
      </form>
    </div>
  );
};

export default ContactForm;
