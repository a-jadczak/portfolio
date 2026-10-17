import SearchSection from '../SearchSection/SearchSection';
import styles from './ProjectsSection.module.scss';
import Project from '../Project/Project';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import { useState } from 'react';
import FilterDialog from '@/features/projects/components/FilterDialog/FilterDialog';
import type { ProjectsFilterData } from '@/types/ProjectsFilterData';
import type { SelectedFilters } from '@/features/projects/types/SelectedFilters';

interface Props {
  projects: GithubProject<ProjectMetadata, Readme>[];
  projectsFilterData: ProjectsFilterData;
}

const ProjectsSection = ({ projects, projectsFilterData }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    technologies: [],
    types: [],
    statuses: [],
  });

  const selectedFiltersFlat = Object.values(selectedFilters).flatMap((e) => e);
  const allEmpty = selectedFiltersFlat.length === 0;

  const bySearchValue = (project: GithubProject<ProjectMetadata, Readme>) =>
    project.name.toLowerCase().includes(searchValue.trim().toLowerCase());

  const byFilters = (project: GithubProject<ProjectMetadata, Readme>) => {
    if (!project.metadata) return false;

    const { technologies, status, type } = project.metadata;
    return [...technologies, status, ...type].some((value) => selectedFiltersFlat.includes(value));
  };

  const _projects = allEmpty
    ? projects.filter(bySearchValue)
    : projects.filter(byFilters).filter(bySearchValue);

  return (
    <>
      <SearchSection
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        projectsCount={_projects.length}
      />

      <ol className={styles.projectsList}>
        {_projects.map((project) => (
          <Project key={project.id} projectData={project} />
        ))}
      </ol>

      <FilterDialog
        projectsFilterData={projectsFilterData}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </>
  );
};

export default ProjectsSection;
