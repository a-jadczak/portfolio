import SearchSection from '../SearchSection/SearchSection';
import styles from './ProjectsSection.module.scss';
import Project from '../Project/Project';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import FilterDialog from '@/features/projects/components/FilterDialog/FilterDialog';
import type { ProjectsFilterData } from '@/types/ProjectsFilterData';
import { ProjectFiltersProvider } from '../../context/ProjectFiltersContext';
import { useProjectFilters } from '../../hooks/useProjectFilters';

interface Props {
  projects: GithubProject<ProjectMetadata, Readme>[];
  projectsFilterData: ProjectsFilterData;
}

const ProjectsSection = ({ projects, projectsFilterData }: Props) => {
  const filters = useProjectFilters(projects, projectsFilterData);

  return (
    <ProjectFiltersProvider value={filters}>
      <div className={styles.projectsContainer}>
        <SearchSection />

        <ol className={styles.projectsList}>
          {filters.filteredProjects.map((project) => (
            <Project key={project.id} projectData={project} />
          ))}
        </ol>
      </div>

      <FilterDialog />
    </ProjectFiltersProvider>
  );
};

export default ProjectsSection;
