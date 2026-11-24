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
import { useTranslations } from '@/i18n/useTranslations';

interface Props {
  lang: Language;
  projects: GithubProject<ProjectMetadata, Readme>[];
  projectsFilterData: ProjectsFilterData;
}

const ProjectsSectionContent = ({ projects, projectsFilterData, lang }: Props) => {
  const filters = useProjectFilters(projects, projectsFilterData);
  const t = useTranslations().t.pages.projects.search;

  return (
    <ProjectFiltersProvider value={filters}>
      <div className={styles.projectsContainer}>
        <SearchSection />

        <ol className={styles.projectsList}>
          {filters.filteredProjects.length > 0 ? (
            filters.filteredProjects.map((project) => (
              <Project key={project.id} projectData={project} lang={lang} />
            ))
          ) : (
            <li className={styles.noResults}>{t.noResults}</li>
          )}
        </ol>
      </div>

      <FilterDialog />
    </ProjectFiltersProvider>
  );
};

const ProjectsSection = ({ lang, ...props }: Props) => (
  <LanguageProvider lang={lang}>
    <ProjectsSectionContent {...props} lang={lang} />
  </LanguageProvider>
);

export default ProjectsSection;
