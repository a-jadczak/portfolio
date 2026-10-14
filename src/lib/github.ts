import { print } from 'graphql';
import type { DocumentNode } from 'graphql';
import projectsQuery from '@/graphql/projects.graphql';
import { parseMetadata } from './portfolio';
import type { GithubProject, PinnedProject } from '@/types/GithubProject';
import type { ProjectMetadata, RawProjectMetadata } from '@/types/ProjectMetadata';

interface ProjectsSchema {
  viewer: {
    pinnedItems: {
      nodes: PinnedProject[];
    };
    repositories: {
      nodes: GithubProject<RawProjectMetadata>[];
    };
  };
}

let projectsData: {
  pinnedProjects: PinnedProject[];
  projects: GithubProject<ProjectMetadata>[];
} | null = null;

export async function getProjects() {
  if (projectsData) return projectsData;

  const data = await githubGraphQL<ProjectsSchema>(projectsQuery);

  projectsData = {
    pinnedProjects: data.viewer.pinnedItems.nodes,
    projects: data.viewer.repositories.nodes.map((project) => ({
      ...project,
      metadata: parseMetadata(project),
    })),
  };

  return projectsData;
}

export async function githubGraphQL<T>(queryAST: DocumentNode, variables = {}): Promise<T> {
  const query = print(queryAST);
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();
  if (!response.ok || json.errors) {
    throw new Error(JSON.stringify(json.errors ?? json));
  }

  return json.data;
}
