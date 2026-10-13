import type { ProjectMetadata } from '@/types/ProjectMetadata';
import YAML from 'yaml';

export const parseMetadata = (project): ProjectMetadata => {
  const metadata: ProjectMetadata = YAML.parse(project.metadata.text);

  metadata.banner = getImageURL(project, metadata.banner);
  metadata.gallery = metadata.gallery.map((image) => getImageURL(project, image));

  return metadata;
};

const getImageURL = (project, imagePath: string) => {
  return `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.defaultBranchRef.name}/${imagePath}`;
};
