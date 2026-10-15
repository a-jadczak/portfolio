import { marked, type Token, type Tokens } from 'marked';
import { removeEmoji } from './emoji';
import type { Nullable } from '@/types/Nullable';
import type { RawReadme, Readme } from '@/types/Readme';
import type { GithubProject } from '@/types/GithubProject';
import type { RawProjectMetadata } from '@/types/ProjectMetadata';

const blockedHeadings = ['Table of Contents', 'Demo', 'Screenshots', 'License'];

/**
 * Checks if a token object is a heading.
 */
const isHeading = (token: Nullable<Token>): token is Tokens.Heading =>
  token != null && token.type === 'heading' && token.depth === 2;

/**
 * Filters readme of blocked content.
 */
export const parseReadme = (
  project: GithubProject<RawProjectMetadata, RawReadme>
): Readme | null => {
  if (!project.readme) return null;

  const tokens: Nullable<Token>[] = marked.lexer(project.readme.text);

  const headings = parseHeadings(tokens);
  const html = removeHeadingsContent(tokens);

  return { headings, html };
};

/**
 * Removes blocked headings and their content from readme
 */
const removeHeadingsContent = (tokens: Nullable<Token>[]) => {
  // Removing = replacing array element with a null
  let removing = true; // If set to true, removes also title and its content

  // Removing Blocked Headings and its content
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (isHeading(token)) {
      const heading = removeEmoji(token.text);

      if (blockedHeadings.includes(heading)) {
        removing = true;
        tokens[i] = null;
      } else {
        removing = false;
      }
    }

    if (removing) {
      tokens[i] = null;
    }
  }

  const finalContent = tokens.filter((token) => token != null);

  return marked.parser(finalContent);
};

/**
 * Removes emoji from the heading and excludes blocked elements.
 */
const parseHeadings = (tokens: Nullable<Token>[]): string[] => {
  const headings = tokens.filter(isHeading).map(({ text }) => removeEmoji(text));

  return headings.filter((heading) => !blockedHeadings.includes(heading));
};
