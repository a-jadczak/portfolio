import Project from '@/features/projects/components/Project/Project';
import SearchSection from '../SearchSection/SearchSection';
import styles from './ProjectsSection.module.scss';

const ProjectsSection = () => {
  return (
    <>
      <SearchSection />
      <ol className={styles.projectsList}>
        <Project />
        <Project />
        <Project />
      </ol>
    </>
  );
};

export default ProjectsSection;
