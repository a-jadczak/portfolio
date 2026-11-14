import { SquareArrowOutUpRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button/ButtonLink';
import { FaGithub } from 'react-icons/fa';
import type { Nullable } from '@/types/Nullable';
import { useTranslations } from '@/i18n/useTranslations';
import styles from './ProjectLinks.module.scss';

interface ProjectLinksProps {
  homepageUrl?: Nullable<string>;
  repositoryUrl?: string;
}

const ProjectLinks = ({ homepageUrl, repositoryUrl }: ProjectLinksProps) => {
  const t = useTranslations().t.pages.projects.projectDialog;
  return (
    <div className={styles.buttonsContainerWrapper}>
      <div className={styles.buttonsContainer}>
        {homepageUrl && (
          <ButtonLink
            className={styles.button}
            variant="primary"
            href={homepageUrl}
            target="_blank"
          >
            <span>{t.liveDemo}</span>
            <SquareArrowOutUpRight size={16} />
          </ButtonLink>
        )}
        {repositoryUrl && (
          <ButtonLink
            className={styles.button}
            variant="default"
            href={repositoryUrl}
            target="_blank"
          >
            <span>{t.repository}</span>
            <FaGithub size={16} />
          </ButtonLink>
        )}
      </div>
    </div>
  );
};

export default ProjectLinks;
