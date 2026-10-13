import { Eye } from 'lucide-react';
import Badge from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import textStyles from '@/components/ui/Text/Text.module.scss';
import dividerStyles from '@/components/ui/Divider/Divider.module.scss';
import styles from './Project.module.scss';
import { openDialog } from '@/utils/dialog';
import type { FeaturedProject } from '@/types/FeaturedProject';
import Heading from '@/components/ui/Heading/Heading';

const technologies = [
  { title: 'React' },
  { title: 'TypeScript' },
  { title: 'SCSS' },
  { title: 'HTML' },
  { title: 'SQL' },
];

const VISIBLE_TECHNOLOGY_COUNT = 3;
const technologyBadges = technologies.slice(0, VISIBLE_TECHNOLOGY_COUNT);
const hiddenTechnologyCount = technologies.length - VISIBLE_TECHNOLOGY_COUNT;

interface Props {
  projectData: FeaturedProject;
}

const Project = ({ projectData }: Props) => {
  const { name, description, metadata } = projectData;

  const handleClick = () => {
    openDialog('project-dialog');
  };

  return (
    <li className={`clipped-corners ${styles.project}`}>
      <article>
        <img
          src={metadata.banner}
          alt="Project preview image"
          className={`clipped-corners ${styles.screenshot}`}
        />
        <Heading as="h3" size="small" className={styles.title}>
          {name}
        </Heading>

        <p className={`${textStyles.text} ${textStyles.medium} ${textStyles.secondary}`}>
          {description}
        </p>
        <ul className={styles.badgesList}>
          {technologyBadges.map(({ title }) => (
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

        <div className={dividerStyles.divider} aria-hidden="true" />
        <Button
          variant="link"
          className={styles.showDetails}
          aria-haspopup="dialog"
          onClick={handleClick}
        >
          <Eye size={18} aria-hidden="true" />
          <span>Show details</span>
        </Button>
      </article>
    </li>
  );
};

export default Project;
