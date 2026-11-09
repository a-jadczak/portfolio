import { useState, type SubmitEventHandler } from 'react';
import type { FormState } from '@/features/contact/types/FormState';

export const useContactForm = () => {
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

  return { state, isDisabled, handleSubmit };
};
