import { Eye } from 'lucide-react';
import Badge from '@/components/ui/Badge/Badge';
import headingStyles from '@/components/ui/Heading/Heading.module.scss';
import textStyles from '@/components/ui/Text/Text.module.scss';
import dividerStyles from '@/components/ui/Divider/Divider.module.scss';
import styles from './Project.module.scss';

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

const Project = () => {
  return (
    <li className={`clipped-corners ${styles.project}`}>
      <article>
        <img
          src="https://picsum.photos/400/200"
          alt="description"
          className={`clipped-corners ${styles.screenshot}`}
        />
        <h3 className={`${headingStyles.heading} ${headingStyles.small} ${styles.title}`}>Title</h3>
        <p className={`${textStyles.text} ${textStyles.medium} ${textStyles.secondary}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, magni!
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
        <button className={styles.showDetails} type="button" aria-haspopup="dialog">
          <Eye size={18} />
          <span>Show details</span>
        </button>
      </article>
    </li>
  );
};

export default Project;
