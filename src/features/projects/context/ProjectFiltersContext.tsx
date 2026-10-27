import { createContext, useContext } from 'react';
import type { useProjectFilters } from '../hooks/useProjectFilters';
import type { Nullable } from '@/types/Nullable';

const ProjectFiltersContext = createContext<Nullable<ReturnType<typeof useProjectFilters>>>(null);

export const ProjectFiltersProvider = ProjectFiltersContext.Provider;

export const useProjectFiltersContext = () => {
  const filters = useContext(ProjectFiltersContext);

  if (!filters) {
    throw new Error('useProjectFiltersContext must be used within ProjectFiltersProvider');
  }

  return filters;
};
