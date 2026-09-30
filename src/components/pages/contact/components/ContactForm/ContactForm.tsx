import { Send } from 'lucide-react';
import Button from '@/components/ui/Button/Button';
import ContactFormHeader from './components/ContactFormHeader/ContactFormHeader';
import FormField from './components/FormField/FormField';
import styles from './ContactForm.module.scss';
import type { SubmitEventHandler } from 'react';

const ContactForm = () => {
  const handleFormSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log('Form submitted:', event.currentTarget);
  };

  return (
    <div className={`clipped-corners ${styles.container}`}>
      <ContactFormHeader />
      <form aria-label="Contact form" onSubmit={handleFormSubmit}>
        <FormField htmlFor="name" label="name">
          <input
            className={styles.input}
            type="text"
            placeholder="John Pork"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </FormField>
        <FormField htmlFor="email" label="email">
          <input
            className={styles.input}
            type="email"
            placeholder="you@example.com"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </FormField>
        <FormField htmlFor="subject" label="subject">
          <input
            className={styles.input}
            type="text"
            placeholder="What's this about?"
            id="subject"
            name="subject"
            required
          />
        </FormField>
        <FormField htmlFor="message" label="message">
          <textarea
            className={`clipped-corners ${styles.messageContainer}`}
            rows={5}
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </FormField>
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
