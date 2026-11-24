import Dialog from '@/components/ui/Dialog/Dialog';
import { formatTwoDigitNumber } from '@/utils/formatTwoDigitNumber';
import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';
import styles from './ProjectDialog.module.scss';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { GithubProject } from '@/types/GithubProject';
import type { Readme as ReadmeData } from '@/types/Readme';
import { useStore } from '@nanostores/react';
import Gallery from './components/Gallery/Gallery';
import Readme from './components/Readme/Readme';
import ProjectMeta from './components/ProjectMeta/ProjectMeta';
import ProjectLinks from './components/ProjectLinks/ProjectLinks';
import NavigationCarousel from './components/NavigationCarousel/NavigationCarousel';
import Badge from '@/components/ui/Badge/Badge';
import { $openedProject } from '@/stores/openedProject';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import type { Language } from '@/types/Language';
import { useTranslations } from '@/i18n/useTranslations';
import type { SyntheticEvent } from 'react';

interface Props {
  lang: Language;
  projects: GithubProject<ProjectMetadata, ReadmeData>[];
}

const handleClose = (event: SyntheticEvent<HTMLDialogElement>) => {
  if (!event.currentTarget.open) $openedProject.set(null);
};

const ProjectDialogContent = ({ projects, lang }: Props) => {
  const t = useTranslations().t.pages.projects.projectDialog;
  const selectedProjectId = useStore($openedProject);
  const currentProjectIndex = projects.findIndex((project) => project.id === selectedProjectId);
  const currentProjectData = projects[currentProjectIndex];

  const {
    id,
    name,
    homepageUrl,
    url,
    readme,
    readmePL,
    metadata,
    description,
    descriptionPL,
    createdAt,
    licenseInfo,
  } = currentProjectData ?? {
    createdAt: new Date(),
    licenseInfo: { name: '' },
    metadata: null,
    readme: null,
  };
  const finalDescription = lang === 'pl' && descriptionPL ? descriptionPL : description;
  const finalReadme = lang === 'pl' && readmePL ? readmePL : readme;

  return (
    <Dialog
      className={styles.dialog}
      id="project-dialog"
      title={`${t.label} / ${formatTwoDigitNumber(currentProjectIndex + 1)}`}
      closeLabel={t.closeLabel}
      titleId="project-title"
      onClose={handleClose}
    >
      <div
        className={styles.metadataContainer}
        data-images={metadata?.gallery?.length ? true : false}
      >
        <div className={styles.metadata}>
          <Heading as="h3">{name}</Heading>
          <Text className={styles.description} variant="secondary" size="small">
            {finalDescription}
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

      {finalReadme ? (
        <div key={id} className={styles.container}>
          <NavigationCarousel headings={finalReadme.headings} />
          <Readme html={finalReadme.html} />
        </div>
      ) : (
        <div className={`${styles.container} ${styles.empty}`}>
          <Text variant="secondary">{t.missingDescription}</Text>
        </div>
      )}
    </Dialog>
  );
};

const ProjectDialog = ({ lang, ...props }: Props) => (
  <LanguageProvider lang={lang}>
    <ProjectDialogContent {...props} lang={lang} />
  </LanguageProvider>
);

export default ProjectDialog;
