import { Eye } from 'lucide-react';
import type { CSSProperties } from 'react';
import Badge from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import styles from './Project.module.scss';
import { openDialog } from '@/utils/dialog';
import Heading from '@/components/ui/Heading/Heading';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { Readme } from '@/types/Readme';
import Text from '@/components/ui/Text/Text';
import Divider from '@/components/ui/Divider/Divider';
import { DEFAULT_PROJECT_ACCENT_COLOR } from '@/config/projects';
import { $openedProject } from '@/stores/openedProject';
import { useTranslations } from '@/i18n/useTranslations';
import type { Language } from '@/types/Language';

const VISIBLE_TECHNOLOGY_COUNT = 3;

interface Props {
  projectData: GithubProject<ProjectMetadata, Readme>;
  lang: Language;
}

const Project = ({ projectData, lang }: Props) => {
  const t = useTranslations().t.pages.projects.projectCard;
  const { name, id, description, descriptionPL, metadata } = projectData;
  const { technologies, banner } = metadata ?? {
    technologies: [],
    banner: '/images/missing-image.png',
  };

  const finalDescription = lang === 'pl' && descriptionPL ? descriptionPL : description;

  const technologyBadges = technologies.slice(0, VISIBLE_TECHNOLOGY_COUNT);
  const hiddenTechnologyCount = technologies.length - VISIBLE_TECHNOLOGY_COUNT;

  const handleClick = () => {
    $openedProject.set(id);
    openDialog('project-dialog');
  };

  return (
    <li
      className={styles.project}
      style={
        { '--accent-color': metadata?.accentColor || DEFAULT_PROJECT_ACCENT_COLOR } as CSSProperties
      }
    >
      <img src={banner} alt={t.previewAlt} className={styles.screenshot} />

      <div className={styles.info}>
        <span className={styles.number}>{t.label} / </span>
        <Heading as="h3" size="small">
          {name}
        </Heading>

        <Text variant="secondary" size="small">
          {finalDescription}
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
          <span>{t.showDetails}</span>
        </Button>
      </div>
    </li>
  );
};

export default Project;
