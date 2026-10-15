import Dialog from '@/components/ui/Dialog/Dialog';
import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';
import { SquareArrowOutUpRight } from 'lucide-react';
import styles from './ProjectDialog.module.scss';
import { ButtonLink } from '@/components/ui/Button/ButtonLink';
import { FaGithub } from 'react-icons/fa';
import Gallery from './components/Gallery/Gallery';
import type { ProjectMetadata } from '@/types/ProjectMetadata';
import type { GithubProject } from '@/types/GithubProject';
import type { Readme as ReadmeData } from '@/types/Readme';
import Readme from './components/Readme/Readme';
import { useProjectStore } from '@/stores/useProjectStore';
import ProjectMeta from './components/ProjectMeta/ProjectMeta';

interface Props {
  projects: GithubProject<ProjectMetadata, ReadmeData>[];
}

interface ProjectLinksProps {
  homepageUrl?: string | null;
  repositoryUrl?: string;
}

const ProjectLinks = ({ homepageUrl, repositoryUrl }: ProjectLinksProps) => (
  <>
    {homepageUrl && (
      <ButtonLink className={styles.button} variant="primary" href={homepageUrl} target="_blank">
        <span>Live demo</span>
        <SquareArrowOutUpRight />
      </ButtonLink>
    )}
    {repositoryUrl && (
      <ButtonLink className={styles.button} variant="default" href={repositoryUrl} target="_blank">
        <span>Github repository</span>
        <FaGithub />
      </ButtonLink>
    )}
  </>
);

const ProjectDialog = ({ projects }: Props) => {
  const selectedProjectId = useProjectStore((state) => state.id);
  const currentProjectData = projects.find((project) => project.id === selectedProjectId);

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
      title="Project / 01"
      closeLabel="Close project dialog"
      titleId="project-title"
    >
      <div className={`clipped-corners ${styles.container}`}>
        <Heading as="h3">{name}</Heading>
        <Text variant="secondary" size="small">
          {description}
        </Text>

        <ProjectMeta metadata={metadata} createdAt={createdAt} licenseInfo={licenseInfo} />

        <ProjectLinks homepageUrl={homepageUrl} repositoryUrl={url} />

        {metadata && <Gallery key={id} banner={metadata.banner} gallery={metadata.gallery} />}
      </div>

      {readme ? (
        <div className={`clipped-corners ${styles.container}`}>
          <Readme html={readme.html} />
        </div>
      ) : (
        <div className={`clipped-corners ${styles.container}`} style={{ textAlign: 'center' }}>
          <Text variant="secondary">This project doesn't contain a description ☹️</Text>
        </div>
      )}
    </Dialog>
  );
};

export default ProjectDialog;
