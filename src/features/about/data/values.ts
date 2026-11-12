import { AppWindow, CodeXml, Gauge, PersonStanding, Search, ShieldCheck } from 'lucide-react';

export const cards = [
  {
    id: 'uiUx',
    Icon: AppWindow,
    image: 'public/svg/pictures/ui-ux.svg',
  },
  {
    id: 'performance',
    Icon: Gauge,
    image: 'public/svg/pictures/performance.svg',
  },
  {
    id: 'accessibility',
    Icon: PersonStanding,
    image: 'public/svg/pictures/accessibility.svg',
  },
  {
    id: 'testing',
    Icon: ShieldCheck,
    image: 'public/svg/pictures/testing.svg',
  },
  {
    id: 'scalableCode',
    Icon: CodeXml,
    image: 'public/svg/pictures/scalable-code.svg',
  },
  {
    id: 'seo',
    Icon: Search,
    image: 'public/svg/pictures/seo.svg',
  },
] as const;
