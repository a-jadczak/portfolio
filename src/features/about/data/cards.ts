import AboutMeCard from '@/features/about/components/AboutMeCard/AboutMeCard.astro';
import TechStackCard from '@/features/about/components/TechStackCard/TechStackCard.astro';
import WhatICareAboutCard from '@/features/about/components/WhatICareAboutCard/WhatICareAboutCard.astro';
import WorkflowCard from '@/features/about/components/WorkflowCard/WorkflowCard.astro';
import EducationCard from '@/features/about/components/EducationCard/EducationCard.astro';

export const cards = [
  { title: 'About me', Content: AboutMeCard, styles: true },
  { title: 'Tech stack', Content: TechStackCard, styles: true },
  { title: 'What I care about', Content: WhatICareAboutCard, styles: false },
  { title: 'My workflow', Content: WorkflowCard, styles: false },
  { title: 'Education', Content: EducationCard, styles: false },
];
