import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata, RawProjectMetadata } from '@/types/ProjectMetadata';
import type { RawReadme } from '@/types/Readme';
import YAML from 'yaml';
import { DEFAULT_PROJECT_ACCENT_COLOR } from '@/config/projects';
import type { Nullable } from '@/types/Nullable';

export const parseMetadata = (
  project: GithubProject<RawProjectMetadata, RawReadme>
): Nullable<ProjectMetadata> => {
  if (!project.metadata) return null;

  const metadata: ProjectMetadata = YAML.parse(project.metadata.text);

  metadata.banner = getImageURL(project, metadata.banner);
  metadata.gallery = metadata.gallery.map((image) => getImageURL(project, image));
  metadata.accentColor = metadata.accentColor || DEFAULT_PROJECT_ACCENT_COLOR;

  return metadata;
};

const getImageURL = (project: GithubProject<RawProjectMetadata, RawReadme>, imagePath: string) => {
  return `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.defaultBranchRef.name}/${imagePath}`;
};
