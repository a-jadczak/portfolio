import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata, RawProjectMetadata } from '@/types/ProjectMetadata';
import type { RawReadme } from '@/types/Readme';
import YAML from 'yaml';

export const parseMetadata = (
  project: GithubProject<RawProjectMetadata, RawReadme>
): ProjectMetadata | null => {
  if (!project.metadata) return null;

  const metadata: ProjectMetadata = YAML.parse(project.metadata.text);

  metadata.banner = getImageURL(project, metadata.banner);
  metadata.gallery = metadata.gallery.map((image) => getImageURL(project, image));

  return metadata;
};

const getImageURL = (project: GithubProject<RawProjectMetadata, RawReadme>, imagePath: string) => {
  return `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.defaultBranchRef.name}/${imagePath}`;
};
