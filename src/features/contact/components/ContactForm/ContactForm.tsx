import { useContactForm } from '@/features/contact/hooks/useContactForm';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import ContactFormHeader from '@/features/contact/components/ContactFormHeader/ContactFormHeader';
import FormField from '@/features/contact/components/FormField/FormField';
import styles from './ContactForm.module.scss';
import type { ContactField } from '@/features/contact/types/ContactField';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { useTranslations } from '@/i18n/useTranslations';
import type { Language } from '@/types/Language';

const formFields: ContactField[] = [
  {
    id: 'name',
    type: 'text',
    startIcon: User,
    autoComplete: 'name',
  },
  {
    id: 'email',
    type: 'email',
    startIcon: Mail,
    autoComplete: 'email',
  },
  {
    id: 'subject',
    type: 'text',
    startIcon: MessageSquare,
    fullWidth: true,
  },
];

const ContactFormContent = () => {
  const { state, isDisabled, handleSubmit } = useContactForm();
  const i18n = useTranslations();
  const t = i18n.t.pages.contact.form;

  return (
    <div className={styles.container} data-send={state}>
      <ContactFormHeader state={state} />
      <form
        className={styles.form}
        aria-label={t.label}
        aria-busy={state === 'loading'}
        onSubmit={handleSubmit}
      >
        {formFields.map(({ id, type, startIcon, autoComplete, fullWidth }) => (
          <FormField
            key={id}
            htmlFor={id}
            label={t.formFields[id].label}
            state={state}
            className={fullWidth ? styles.fullWidth : undefined}
          >
            <Input
              id={id}
              name={id}
              type={type}
              placeholder={t.formFields[id].placeholder}
              startIcon={startIcon}
              autoComplete={autoComplete}
              disabled={isDisabled}
              required
            />
          </FormField>
        ))}

        <FormField
          htmlFor="message"
          label={t.formFields['message'].label}
          state={state}
          className={styles.fullWidth}
        >
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t.formFields['message'].placeholder}
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
            <span>{t.message[state]}</span>
            {!isDisabled && <Send size={18} aria-hidden="true" />}
          </Button>
        </div>
      </form>
    </div>
  );
};

const ContactForm = ({ lang }: { lang: Language }) => {
  return (
    <LanguageProvider lang={lang}>
      <ContactFormContent />
    </LanguageProvider>
  );
};

export default ContactForm;
