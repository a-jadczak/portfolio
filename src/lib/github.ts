import { print } from 'graphql';
import type { DocumentNode } from 'graphql';
import projectsQuery from '@/graphql/projects.graphql';
import { parseMetadata } from './portfolio';
import type { GithubProject, PinnedProject } from '@/types/GithubProject';
import type { ProjectMetadata, RawProjectMetadata } from '@/types/ProjectMetadata';
import type { RawReadme, Readme } from '@/types/Readme';
import { parseReadme } from '@/utils/parseReadme';

interface ProjectsSchema {
  viewer: {
    pinnedItems: {
      nodes: PinnedProject[];
    };
    repositories: {
      nodes: GithubProject<RawProjectMetadata, RawReadme>[];
    };
  };
}

let projectsData: {
  featuredProjects: GithubProject<ProjectMetadata, Readme>[];
  projects: GithubProject<ProjectMetadata, Readme>[];
} | null = null;

async function fetchProjects() {
  const { viewer } = await githubGraphQL<ProjectsSchema>(projectsQuery);
  const pinnedOrder = new Map(
    viewer.pinnedItems.nodes.map((project, index) => [project.id, index])
  );

  const projects = viewer.repositories.nodes
    .map((project) => ({
      ...project,
      metadata: parseMetadata(project),
      readme: parseReadme(project),
    }))
    .sort(
      (a, b) =>
        (pinnedOrder.get(a.id) ?? pinnedOrder.size) - (pinnedOrder.get(b.id) ?? pinnedOrder.size)
    );

  projectsData = {
    featuredProjects: projects.filter((project) => pinnedOrder.has(project.id)),
    projects,
  };

  return projectsData;
}

export async function getProjects() {
  if (projectsData) return projectsData;

  return await fetchProjects();
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
