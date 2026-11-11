import SearchSection from '@/features/projects/components/SearchSection/SearchSection';
import styles from './ProjectsSection.module.scss';
import Project from '@/features/projects/components/Project/Project';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import FilterDialog from '@/features/projects/components/FilterDialog/FilterDialog';
import type { ProjectsFilterData } from '@/types/ProjectsFilterData';
import { ProjectFiltersProvider } from '@/features/projects/context/ProjectFiltersContext';
import { useProjectFilters } from '@/features/projects/hooks/useProjectFilters';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import type { Language } from '@/types/Language';

interface Props {
  lang: Language;
  projects: GithubProject<ProjectMetadata, Readme>[];
  projectsFilterData: ProjectsFilterData;
}

const ProjectsSectionContent = ({ projects, projectsFilterData }: Omit<Props, 'lang'>) => {
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

const ProjectsSection = ({ lang, ...props }: Props) => (
  <LanguageProvider lang={lang}>
    <ProjectsSectionContent {...props} />
  </LanguageProvider>
);

export default ProjectsSection;
