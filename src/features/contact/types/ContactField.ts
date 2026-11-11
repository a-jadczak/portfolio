import type { I18n } from '@/types/I18n';
import type { Icon } from '@/types/Icon';

export type ContactField = {
  id: keyof I18n['t']['pages']['contact']['form']['formFields'];
  type?: 'text' | 'email';
  startIcon?: Icon;
  autoComplete?: string;
  fullWidth?: boolean;
};
