import type { ProjectMetadata, RawProjectMetadata } from './ProjectMetadata';
import type { RawReadme, Readme } from './Readme';

type MetadataType = RawProjectMetadata | ProjectMetadata;
type ReadmeType = RawReadme | Readme;

export interface PinnedProject {
  id: string;
  name: string;
}

export interface GithubProject<T extends MetadataType, Y extends ReadmeType> extends PinnedProject {
  description: string;
  homepageUrl: string | null;
  url: string;
  createdAt: Date;
  licenseInfo: {
    name: string;
    spdxId: string;
  };
  owner: { login: string };
  defaultBranchRef: { name: string };
  metadata: T | null;
  readme: Y | null;
}
