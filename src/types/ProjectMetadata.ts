type ProjectType = 'Mobile' | 'Desktop App' | 'Web App';
type Status = 'Completed' | 'In Progress' | 'Archived';

export interface ProjectMetadata {
  type: ProjectType[];
  status: Status;
  technologies: string[];
  banner: string;
  gallery: string[];
}

export type RawProjectMetadata = { text: string };
