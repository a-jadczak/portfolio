import type { Icon } from '@/types/Icon';

export type ContactField = {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email';
  startIcon?: Icon;
  autoComplete?: string;
  fullWidth?: boolean;
};
