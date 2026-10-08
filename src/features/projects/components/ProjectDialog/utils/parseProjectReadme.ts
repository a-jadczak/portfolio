import { marked, type Token, type Tokens } from 'marked';
import { removeEmoji } from './emoji';
import type { Nullable } from '@/types/Nullable';

interface ReturnType {
  headings: string[];
  html: string;
}

const blockedHeadings = ['Table of Contents', 'Demo', 'Screenshots'];

const isHeading = (token: Nullable<Token>): token is Tokens.Heading =>
  token != null && token.type === 'heading' && token.depth === 2;

export const parseProjectReadme = (readme: string): ReturnType => {
  const tokens: Nullable<Token>[] = marked.lexer(readme);

  const headings = parseHeadings(tokens);
  const html = removeHeadingsContent(tokens);

  return { headings, html };
};

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

const parseHeadings = (tokens: Nullable<Token>[]): string[] => {
  const headings = tokens.filter(isHeading).map(({ text }) => removeEmoji(text));

  return headings.filter((heading) => !blockedHeadings.includes(heading));
};
