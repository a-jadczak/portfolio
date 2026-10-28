import Dialog from '@/components/ui/Dialog/Dialog';
import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';
import styles from './ProjectDialog.module.scss';
import { SquareArrowOutUpRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button/ButtonLink';
import { FaGithub } from 'react-icons/fa';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { GithubProject } from '@/types/GithubProject';
import type { Readme as ReadmeData } from '@/types/Readme';
import { useProjectStore } from '@/stores/useProjectStore';
import Gallery from './components/Gallery/Gallery';
import Readme from './components/Readme/Readme';
import ProjectMeta from './components/ProjectMeta/ProjectMeta';
import NavigationCarousel from './components/NavigationCarousel/NavigationCarousel';
import Badge from '@/components/ui/Badge/Badge';

interface Props {
  projects: GithubProject<ProjectMetadata, ReadmeData>[];
}

interface ProjectLinksProps {
  homepageUrl?: string | null;
  repositoryUrl?: string;
}

const ProjectLinks = ({ homepageUrl, repositoryUrl }: ProjectLinksProps) => (
  <div className={styles.buttonsContainerWrapper}>
    <div className={styles.buttonsContainer}>
      {homepageUrl && (
        <ButtonLink className={styles.button} variant="primary" href={homepageUrl} target="_blank">
          <span>Live demo</span>
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
          <span>Github repository</span>
          <FaGithub size={16} />
        </ButtonLink>
      )}
    </div>
  </div>
);

const ProjectDialog = ({ projects }: Props) => {
  const selectedProjectId = useProjectStore((state) => state.id);
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
      title={`Project / ${String(currentProjectIndex + 1).padStart(2, '0')}`}
      closeLabel="Close project dialog"
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
          <Text variant="secondary">This project doesn't contain a description ☹️</Text>
        </div>
      )}
    </Dialog>
  );
};

export default ProjectDialog;
