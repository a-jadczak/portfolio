import Dialog from '@/components/ui/Dialog/Dialog';
import { formatTwoDigitNumber } from '@/utils/formatTwoDigitNumber';
import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';
import styles from './ProjectDialog.module.scss';
import { SquareArrowOutUpRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button/ButtonLink';
import { FaGithub } from 'react-icons/fa';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { GithubProject } from '@/types/GithubProject';
import type { Readme as ReadmeData } from '@/types/Readme';
import { useStore } from '@nanostores/react';
import Gallery from './components/Gallery/Gallery';
import Readme from './components/Readme/Readme';
import ProjectMeta from './components/ProjectMeta/ProjectMeta';
import NavigationCarousel from './components/NavigationCarousel/NavigationCarousel';
import Badge from '@/components/ui/Badge/Badge';
import { $openedProject } from '@/stores/openedProject';
import type { Nullable } from '@/types/Nullable';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import type { Language } from '@/types/Language';
import { useTranslations } from '@/i18n/useTranslations';

interface Props {
  lang: Language;
  projects: GithubProject<ProjectMetadata, ReadmeData>[];
}

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

const ProjectDialogContent = ({ projects }: Omit<Props, 'lang'>) => {
  const t = useTranslations().t.pages.projects.projectDialog;
  const selectedProjectId = useStore($openedProject);
  const currentProjectIndex = projects.findIndex((project) => project.id === selectedProjectId);
  const currentProjectData = projects[currentProjectIndex];

  const { id, name, homepageUrl, url, readme, metadata, description, createdAt, licenseInfo } =
    currentProjectData ?? {
      createdAt: new Date(),
      licenseInfo: { name: '' },
      metadata: null,
      readme: null,
    };

  return (
    <Dialog
      className={styles.dialog}
      id="project-dialog"
      title={`${t.label} / ${formatTwoDigitNumber(currentProjectIndex + 1)}`}
      closeLabel={t.closeLabel}
      titleId="project-title"
    >
      <div className={styles.metadataContainer}>
        <div className={styles.metadata}>
          <Heading as="h3">{name}</Heading>
          <Text className={styles.description} variant="secondary" size="small">
            {description}
          </Text>

          <div className={styles.metaContainer}>
            <ProjectMeta
              className={styles.meta}
              metadata={metadata}
              createdAt={createdAt}
              licenseInfo={licenseInfo}
            />
          </div>
          <ul className={styles.badgesList}>
            {metadata?.technologies?.map((title) => (
              <li key={title}>
                <Badge title={title} />
              </li>
            ))}
          </ul>

          <ProjectLinks homepageUrl={homepageUrl} repositoryUrl={url} />
        </div>

        {metadata && (
          <Gallery
            className={styles.gallery}
            key={id}
            banner={metadata.banner}
            gallery={metadata.gallery}
          />
        )}
      </div>

      {readme ? (
        <div key={id} className={styles.container}>
          <NavigationCarousel headings={readme.headings} />
          <Readme html={readme.html} />
        </div>
      ) : (
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <Text variant="secondary">{t.missingDescription}</Text>
        </div>
      )}
    </Dialog>
  );
};

const ProjectDialog = ({ lang, ...props }: Props) => (
  <LanguageProvider lang={lang}>
    <ProjectDialogContent {...props} />
  </LanguageProvider>
);

export default ProjectDialog;
