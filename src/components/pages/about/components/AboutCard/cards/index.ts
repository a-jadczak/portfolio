import AboutMeCard from './AboutMeCard/AboutMeCard.astro';
import TechStackCard from './TechStackCard/TechStackCard.astro';
import GithubActivityCard from './GithubActivityCard/GithubActivityCard.astro';
import WhatICareAboutCard from './WhatICareAboutCard/WhatICareAboutCard.astro';
import WorkflowCard from './WorkflowCard/WorkflowCard.astro';
import ExperienceCard from './ExperienceCard/ExperienceCard.astro';
import BeyondCodeCard from './BeyondCodeCard/BeyondCodeCard.astro';

export {
  AboutMeCard,
  TechStackCard,
  GithubActivityCard,
  WhatICareAboutCard,
  WorkflowCard,
  ExperienceCard,
  BeyondCodeCard,
};

export const CARDS = [
  { title: 'About me', Content: AboutMeCard },
  { title: 'Tech stack', Content: TechStackCard },
  { title: 'Github activity', Content: GithubActivityCard },
  { title: 'What I care about', Content: WhatICareAboutCard },
  { title: 'My workflow', Content: WorkflowCard },
  { title: 'Experience', Content: ExperienceCard },
  { title: 'Beyond code', Content: BeyondCodeCard },
];
