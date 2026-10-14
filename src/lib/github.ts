import { print } from 'graphql';
import type { DocumentNode } from 'graphql';
import featuredProjectsQuery from '@/graphql/featuredProjects.graphql';
import projectsQuery from '@/graphql/projects.graphql';
import { parseMetadata } from './portfolio';
import type { GithubProject } from '@/types/GithubProject';
import type { ProjectMetadata, RawProjectMetadata } from '@/types/ProjectMetadata';

export async function getFeaturedProjects(): Promise<GithubProject<ProjectMetadata>[]> {
  const data = await githubGraphQL<{
    viewer: {
      pinnedItems: {
        nodes: GithubProject<RawProjectMetadata>[];
      };
    };
  }>(featuredProjectsQuery);
  const featuredProjects: GithubProject<RawProjectMetadata>[] = data.viewer.pinnedItems.nodes;

  const projects: GithubProject<ProjectMetadata>[] = featuredProjects.map((project) => ({
    ...project,
    metadata: parseMetadata(project),
  }));

  return projects;
}

export async function getProjects() {
  return githubGraphQL(projectsQuery);
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
