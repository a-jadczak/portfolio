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
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <label className={styles.label} htmlFor="name">
        <span className={styles.labelContent}>name: </span>
        <input className={styles.input} type="text" placeholder="Your name" name="name" />
      </label>
      <label className={styles.label} htmlFor="email">
        <span className={styles.labelContent}>email: </span>
        <input className={styles.input} type="text" placeholder="you@example.com" name="email" />
      </label>
      <label className={styles.label} htmlFor="subject">
        <span className={styles.labelContent}>subject: </span>
        <input
          className={styles.input}
          type="text"
          placeholder="What's this about?"
          name="subject"
        />
      </label>
      <label className={styles.label} htmlFor="message">
        <span className={styles.labelContent}>message: </span>
        <textarea
          className={`clipped-corners ${styles.messageContainer}`}
          rows={5}
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
  );
};

export default ContactForm;
