import type { ProjectMetadata, RawProjectMetadata } from './ProjectMetadata';

type MetadataType = RawProjectMetadata | ProjectMetadata;

export interface GithubProject<T extends MetadataType> {
  name: string;
  description: string;
  url: string;
  owner: { login: string };
  defaultBranchRef: { name: string };
  metadata: T;
}
