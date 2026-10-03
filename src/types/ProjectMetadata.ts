export interface ProjectMetadata {
  type: string[];
  status: 'Completed' | 'In progress' | 'Archived';
  technologies: string[];
  banner: string;
  gallery: string[];
}
