export interface ProjectMetadata {
  descriptionPL: string;
  type: string[];
  status: string;
  technologies: string[];
  banner: string;
  gallery: string[];
  accentColor: string;
}

export type RawProjectMetadata = { text: string };
