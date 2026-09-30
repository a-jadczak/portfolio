import AboutMeCard from './AboutMeCard/AboutMeCard.astro';
import TechStackCard from './TechStackCard/TechStackCard.astro';
import WhatICareAboutCard from './WhatICareAboutCard/WhatICareAboutCard.astro';
import WorkflowCard from './WorkflowCard/WorkflowCard.astro';
import ExperienceCard from './ExperienceCard/ExperienceCard.astro';

export const cards = [
  { title: 'About me', Content: AboutMeCard },
  { title: 'Tech stack', Content: TechStackCard },
  { title: 'What I care about', Content: WhatICareAboutCard },
  { title: 'My workflow', Content: WorkflowCard },
  { title: 'Experience', Content: ExperienceCard },
];
