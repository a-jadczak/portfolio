import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import ContactFormHeader from '../ContactFormHeader/ContactFormHeader';
import FormField from '../FormField/FormField';
import styles from './ContactForm.module.scss';
import { useState, type SubmitEventHandler } from 'react';
import type { FormState } from '@/features/contact/types/FormState';
import type { ContactField } from '@/features/contact/types/ContactField';

const formFields: ContactField[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'John Pork',
    autoComplete: 'name',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
  },
  {
    name: 'subject',
    type: 'text',
    placeholder: "What's this about?",
  },
];

const submitMessages: Record<FormState, string> = {
  idle: 'Send message',
  loading: 'Sending...',
  success: 'Message sent!',
  error: 'Failed to send. Try again',
};

const ContactForm = () => {
  const [state, setState] = useState<FormState>('idle');
  const isDisabled = state === 'loading' || state === 'success';

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setState('loading');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', import.meta.env.PUBLIC_WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error('Failed to send message');
      }

      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <div className={`clipped-corners ${styles.container}`} data-send={state}>
      <ContactFormHeader state={state} />
      <form aria-label="Contact form" aria-busy={state === 'loading'} onSubmit={handleSubmit}>
        {formFields.map(({ name, type, placeholder, autoComplete }) => (
          <FormField key={name} htmlFor={name} label={name} state={state}>
            <input
              className={styles.input}
              type={type}
              placeholder={placeholder}
              id={name}
              name={name}
              autoComplete={autoComplete}
              disabled={isDisabled}
              required
            />
          </FormField>
        ))}
        <FormField htmlFor="message" label="message" state={state}>
          <textarea
            className={`clipped-corners ${styles.messageContainer}`}
            rows={10}
            id="message"
            name="message"
            disabled={isDisabled}
            placeholder="Tell me about your project..."
            required
          />
        </FormField>
        <Button
          className={styles.submitButton}
          disabled={isDisabled}
          variant="primary"
          type="submit"
        >
          <span>{submitMessages[state]}</span>
          {!isDisabled && <Send size={18} aria-hidden="true" />}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
