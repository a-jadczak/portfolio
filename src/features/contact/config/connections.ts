import { FaCircle, FaLinkedinIn } from 'react-icons/fa';
import { Copy, ExternalLink, Mail, Radio, RadioOff } from 'lucide-react';
import type { Icon } from '@/types/Icon';

export type Role = 'default' | 'linkedin' | 'available' | 'unavailable';

export interface ConnectionConfig {
  icon: Icon;
  role: Role;
  action: (() => void) | null;
  iconSize?: number;
  actionIcon: Icon;
}

export const emailAdress = 'arkadiusz.jadczak7@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/arkadiusz-jadczak/';
const available = true;

const unavailableInfo = {
  icon: RadioOff,
  role: 'unavailable',
  action: null,
  actionIcon: FaCircle,
  iconSize: 10,
} as ConnectionConfig;

export const connections = {
  email: {
    icon: Mail,
    role: 'default',
    action: async () => {
      await navigator.clipboard.writeText(emailAdress);
    },
    actionIcon: Copy,
    iconSize: 20,
  },
  linkedin: {
    icon: FaLinkedinIn,
    role: 'linkedin',
    action: () => window.open(linkedinUrl, '_blank'),
    actionIcon: ExternalLink,
    iconSize: 20,
  },
  [available ? 'available' : 'unavailable']: available
    ? {
        icon: Radio,
        role: 'available',
        action: null,
        actionIcon: FaCircle,
        iconSize: 10,
      }
    : unavailableInfo,
} satisfies Record<string, ConnectionConfig>;

export type ConnectionId = 'email' | 'linkedin' | 'available' | 'unavailable';
