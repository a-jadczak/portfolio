import { AppWindow, CodeXml, Gauge, PersonStanding, Search, ShieldCheck } from 'lucide-react';

export const cards = [
  {
    title: 'UI / UX',
    Icon: AppWindow,
    description:
      'Creating clean, intuitive, and user-friendly interfaces that are easy to navigate.',
    image: 'public/svg/pictures/ui-ux.svg',
  },
  {
    title: 'Performance',
    Icon: Gauge,
    description: 'Making websites fast, responsive, and smooth to use on different devices.',
    image: 'public/svg/pictures/performance.svg',
  },
  {
    title: 'Accessibility',
    Icon: PersonStanding,
    description: 'Making websites easy to use for everyone, including people with disabilities.',
    image: 'public/svg/pictures/accessibility.svg',
  },
  {
    title: 'Testing',
    Icon: ShieldCheck,
    description:
      'Checking that applications work correctly and preventing bugs before they reach users.',
    image: 'public/svg/pictures/testing.svg',
  },
  {
    title: 'Scalable code',
    Icon: CodeXml,
    description: 'Writing code that is easy to maintain, improve, and expand as projects grow.',
    image: 'public/svg/pictures/scalable-code.svg',
  },
  {
    title: 'SEO',
    Icon: Search,
    description: 'Making websites easier to find through search engines like Google.',
    image: 'public/svg/pictures/seo.svg',
  },
];
