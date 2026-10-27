import { useState } from 'react';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import type { SelectedFilters } from '@/features/projects/types/SelectedFilters';
import type { FilterGroup } from '../types/FilterGroup';
import type { FilterKey } from '../types/FilterKey';
import type { ProjectsFilterData } from '@/types/ProjectsFilterData';

const EMPTY_FILTERS: SelectedFilters = {
  technologies: [],
  types: [],
  statuses: [],
};

export const useProjectFilters = (
  projects: GithubProject<ProjectMetadata, Readme>[],
  projectsFilterData: ProjectsFilterData
) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(EMPTY_FILTERS);
  const { technologies, types, statuses } = projectsFilterData;

  const filterGroups: FilterGroup[] = [
    {
      id: 'project-technologies',
      label: 'Technologies',
      category: 'technologies',
      options: [...technologies],
    },
    {
      id: 'project-type',
      label: 'Project Type',
      category: 'types',
      options: [...types],
    },
    {
      id: 'project-status',
      label: 'Status',
      category: 'statuses',
      options: [...statuses],
    },
  ];

  const resetFilterValues = () => {
    setSelectedFilters(EMPTY_FILTERS);
  };

  const addFilterValue = (key: FilterKey, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }));
  };

  const removeFilterValue = (key: FilterKey, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== value),
    }));
  };

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
    filterGroups,
    resetFilterValues,
    addFilterValue,
    removeFilterValue,
  };
};
