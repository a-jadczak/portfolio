import { useState, type SubmitEventHandler } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import ContactFormHeader from '../ContactFormHeader/ContactFormHeader';
import FormField from '../FormField/FormField';
import styles from './ContactForm.module.scss';
import type { FormState } from '@/features/contact/types/FormState';
import type { ContactField } from '@/features/contact/types/ContactField';

const formFields: ContactField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'John Pork',
    startIcon: User,
    autoComplete: 'name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    startIcon: Mail,
    autoComplete: 'email',
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: "What's this about?",
    startIcon: MessageSquare,
    fullWidth: true,
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
    <div className={styles.container} data-send={state}>
      <ContactFormHeader state={state} />
      <form
        className={styles.form}
        aria-label="Contact form"
        aria-busy={state === 'loading'}
        onSubmit={handleSubmit}
      >
        {formFields.map(
          ({ name, label, type = 'text', placeholder, startIcon, autoComplete, fullWidth }) => (
            <FormField
              key={name}
              htmlFor={name}
              label={label}
              state={state}
              className={fullWidth ? styles.fullWidth : undefined}
            >
              <Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                startIcon={startIcon}
                autoComplete={autoComplete}
                disabled={isDisabled}
                required
              />
            </FormField>
          )
        )}

        <FormField htmlFor="message" label="Message" state={state} className={styles.fullWidth}>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            disabled={isDisabled}
            required
          />
        </FormField>

        <div className={styles.fullWidth}>
          <Button
            className={styles.submitButton}
            disabled={isDisabled}
            variant="primary"
            type="submit"
          >
            <span>{submitMessages[state]}</span>
            {!isDisabled && <Send size={18} aria-hidden="true" />}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
