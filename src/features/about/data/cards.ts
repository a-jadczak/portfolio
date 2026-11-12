import AboutMeCard from '@/features/about/components/AboutMeCard/AboutMeCard.astro';
import TechStackCard from '@/features/about/components/TechStackCard/TechStackCard.astro';
import WhatICareAboutCard from '@/features/about/components/WhatICareAboutCard/WhatICareAboutCard.astro';
import WorkflowCard from '@/features/about/components/WorkflowCard/WorkflowCard.astro';
import EducationCard from '@/features/about/components/EducationCard/EducationCard.astro';

export const cards = [
  { id: 'aboutMe', Content: AboutMeCard, styles: true },
  { id: 'techStack', Content: TechStackCard, styles: true },
  { id: 'values', Content: WhatICareAboutCard, styles: false },
  { id: 'workflow', Content: WorkflowCard, styles: false },
  { id: 'education', Content: EducationCard, styles: false },
] as const;
