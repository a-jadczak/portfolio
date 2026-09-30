import Project from '@/components/projects/Project/Project';
import SearchSection from '../SearchSection/SearchSection';
import styles from './ProjectsSection.module.scss';

const ProjectsSection = () => {
  return (
    <>
      <SearchSection />
      <ul className={styles.projectsList}>
        <Project />
        <Project />
        <Project />
      </ul>
    </>
  );
};

export default ProjectsSection;
