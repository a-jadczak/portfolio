import { Eye } from 'lucide-react';
import Badge from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import styles from './Project.module.scss';
import { openDialog } from '@/utils/dialog';
import Heading from '@/components/ui/Heading/Heading';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import { useProjectStore } from '@/stores/useProjectStore';
import Text from '@/components/ui/Text/Text';
import Divider from '@/components/ui/Divider/Divider';

const VISIBLE_TECHNOLOGY_COUNT = 3;

interface Props {
  projectData: GithubProject<ProjectMetadata, Readme>;
}

const Project = ({ projectData }: Props) => {
  const { name, id, description, metadata } = projectData;
  const { technologies, banner } = metadata ?? {
    technologies: [],
    banner: '/images/missing-image.png',
  };

  const technologyBadges = technologies.slice(0, VISIBLE_TECHNOLOGY_COUNT);
  const hiddenTechnologyCount = technologies.length - VISIBLE_TECHNOLOGY_COUNT;

  const handleClick = () => {
    useProjectStore.getState().setProjectId(id);
    openDialog('project-dialog');
  };

  return (
    <li className={styles.project}>
      <img src={banner} alt="Project preview image" className={styles.screenshot} />
      <div className={styles.info}>
        <span className={styles.number}></span>
        <Heading as="h3" size="small">
          {name}
        </Heading>

        <Text variant="secondary" size="small">
          {description}
        </Text>
        <ul className={styles.badgesList}>
          {technologyBadges.map((title) => (
            <li key={title}>
              <Badge title={title} />
            </li>
          ))}
          {hiddenTechnologyCount > 0 && (
            <li>
              <Badge title={`+${hiddenTechnologyCount}`} />
            </li>
          )}
        </ul>

        <Divider className={styles.divider} />

        <Button
          variant="link"
          className={styles.showDetails}
          aria-haspopup="dialog"
          onClick={handleClick}
        >
          <Eye size={16} aria-hidden="true" />
          <span>Show details</span>
        </Button>
      </div>
    </li>
  );
};

export default Project;
