import { AppWindow, CodeXml, Gauge, PersonStanding, Search, ShieldCheck } from 'lucide-react';

export const cards = [
  {
    title: 'UI / UX',
    Icon: AppWindow,
    description:
      'Creating clean, intuitive, and user-friendly interfaces that are easy to navigate.',
    image: '/images/window.png',
  },
  {
    title: 'Performance',
    Icon: Gauge,
    description: 'Making websites fast, responsive, and smooth to use on different devices.',
    image: '/images/gauage.png',
  },
  {
    title: 'Accessibility',
    Icon: PersonStanding,
    description: 'Making websites easy to use for everyone, including people with disabilities.',
    image: '/images/accessibility.png',
  },
  {
    title: 'Testing',
    Icon: ShieldCheck,
    description:
      'Checking that applications work correctly and preventing bugs before they reach users.',
    image: '/images/testing.png',
  },
  {
    title: 'Scalable code',
    Icon: CodeXml,
    description: 'Writing code that is easy to maintain, improve, and expand as projects grow.',
    image: '/images/scalable-code.png',
  },
  {
    title: 'SEO',
    Icon: Search,
    description: 'Making websites easier to find through search engines like Google.',
    image: '/images/seo.png',
  },
];
