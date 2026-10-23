import { FaCircle, FaLinkedinIn } from 'react-icons/fa';
import { Copy, ExternalLink, Mail, Radio } from 'lucide-react';
import type { Icon } from '@/types/Icon';

export type Role = 'default' | 'linkedin' | 'available' | 'unavailable';

export interface ConnectionConfig {
  icon: Icon;
  title: string;
  description: string;
  role: Role;
  actionLabel: string;
  action: (() => void) | null;
  actionIcon: Icon;
}

export const emailAdress = 'arkadiusz.jadczak7@gmail.com';

export const connections = {
  email: {
    icon: Mail,
    title: 'Email',
    description: 'Drop me a message anytime.',
    role: 'default',
    actionLabel: emailAdress,
    action: async () => {
      await navigator.clipboard.writeText(emailAdress);
    },
    actionIcon: Copy,
  },
  linkedin: {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn.',
    role: 'linkedin',
    actionLabel: 'Connect with me',
    action: () => window.open('https://www.linkedin.com/in/arkadiusz-jadczak/', '_blank'),
    actionIcon: ExternalLink,
  },
  available: {
    icon: Radio,
    title: 'Available',
    description: "Let's collaborate\nRemote · Poland",
    role: 'available',
    actionLabel: 'Open to opportunites',
    action: null,
    actionIcon: FaCircle,
  },
} satisfies Record<string, ConnectionConfig>;

export type ConnectionId = keyof typeof connections;
