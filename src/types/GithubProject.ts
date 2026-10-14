import type { ProjectMetadata, RawProjectMetadata } from './ProjectMetadata';

type MetadataType = RawProjectMetadata | ProjectMetadata;

export interface PinnedProject {
  id: string;
  name: string;
}

export interface GithubProject<T extends MetadataType> extends PinnedProject {
  description: string;
  homePageUrl: string;
  url: string;
  createdAt: Date;
  licenseInfo: {
    name: string;
    spdxId: string;
  };
  owner: { login: string };
  defaultBranchRef: { name: string };
  metadata: T | null;
  readme: { text: string } | null;
}
