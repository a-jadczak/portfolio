import AboutMeCard from '../components/AboutMeCard/AboutMeCard.astro';
import TechStackCard from '../components/TechStackCard/TechStackCard.astro';
import WhatICareAboutCard from '../components/WhatICareAboutCard/WhatICareAboutCard.astro';
import WorkflowCard from '../components/WorkflowCard/WorkflowCard.astro';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard.astro';

export const cards = [
  { title: 'About me', Content: AboutMeCard },
  { title: 'Tech stack', Content: TechStackCard },
  { title: 'What I care about', Content: WhatICareAboutCard },
  { title: 'My workflow', Content: WorkflowCard },
  { title: 'Experience', Content: ExperienceCard },
];
