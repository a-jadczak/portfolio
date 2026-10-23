import SearchSection from '../SearchSection/SearchSection';
import styles from './ProjectsSection.module.scss';
import Project from '../Project/Project';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import FilterDialog from '@/features/projects/components/FilterDialog/FilterDialog';
import type { ProjectsFilterData } from '@/types/ProjectsFilterData';
import { useProjectFilters } from '@/features/projects/hooks/useProjectFilters';

interface Props {
  projects: GithubProject<ProjectMetadata, Readme>[];
  projectsFilterData: ProjectsFilterData;
}

const ProjectsSection = ({ projects, projectsFilterData }: Props) => {
  const { searchValue, setSearchValue, selectedFilters, setSelectedFilters, filteredProjects } =
    useProjectFilters(projects);

  return (
    <>
      <SearchSection
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        projectsFilterData={projectsFilterData}
        projectsCount={filteredProjects.length}
      />

      <ol className={styles.projectsList}>
        {filteredProjects.map((project) => (
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
