import SearchSection from '../SearchSection/SearchSection';
import styles from './ProjectsSection.module.scss';
import Project from '../Project/Project';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import { useState } from 'react';

interface Props {
  projects: GithubProject<ProjectMetadata, Readme>[];
}

const ProjectsSection = ({ projects }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const _projects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

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
    </>
  );
};

export default ProjectsSection;
