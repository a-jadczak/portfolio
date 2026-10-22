import { useState } from 'react';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import type { SelectedFilters } from '@/features/projects/types/SelectedFilters';

export const useProjectFilters = (projects: GithubProject<ProjectMetadata, Readme>[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    technologies: [],
    types: [],
    statuses: [],
  });

  const selectedFiltersFlat = Object.values(selectedFilters).flat();
  const areAllFitersUnchecked = selectedFiltersFlat.length === 0;

  const bySearchValue = (project: GithubProject<ProjectMetadata, Readme>) =>
    project.name.toLowerCase().includes(searchValue.trim().toLowerCase());

  const byFilters = (project: GithubProject<ProjectMetadata, Readme>) => {
    if (!project.metadata) return false;

    const { technologies, status, type } = project.metadata;
    return [...technologies, status, ...type].some((value) => selectedFiltersFlat.includes(value));
  };

  const filteredProjects = areAllFitersUnchecked
    ? projects.filter(bySearchValue)
    : projects.filter(byFilters).filter(bySearchValue);

  return {
    searchValue,
    setSearchValue,
    selectedFilters,
    setSelectedFilters,
    filteredProjects,
  };
};
