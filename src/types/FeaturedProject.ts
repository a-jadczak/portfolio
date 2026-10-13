import type { ProjectMetadata } from './ProjectMetadata';

export interface FeaturedProject {
  name: string;
  description: string;
  url: string;
  metadata: ProjectMetadata;
}
