import type { GithubProject } from './GithubProject';
import type { ProjectMetadata } from './ProjectMetadata';
import type { Readme } from './Readme';

export interface ProjectsFilterData {
  statuses: Set<string>;
  technologies: Set<string>;
  types: Set<string>;
  fillData: (projects: GithubProject<ProjectMetadata, Readme>[] | undefined) => void;
}
