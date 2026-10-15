import { useEffect, useRef } from 'react';
import { removeEmoji } from '@/utils/emoji';
import mermaid from 'mermaid';
import styles from './Readme.module.scss';

interface Props {
  html: string;
}

const Readme = ({ html }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
    const container = containerRef.current!;

    container.querySelectorAll(':scope > h2').forEach((heading) => {
      heading.id = removeEmoji(heading.textContent ?? '')
        .toLowerCase()
        .replace(' ', '-');
    });

    const renderMermaid = async () => {
      const flowcharts = container.querySelectorAll('pre > code.language-mermaid');

      const nodes: HTMLElement[] = [];
      flowcharts.forEach((code) => {
        const pre = code.parentElement;
        if (!pre) return;

        const diagram = document.createElement('div');
        diagram.className = 'mermaid';
        diagram.textContent = code.textContent;

        pre.replaceWith(diagram);
        nodes.push(diagram);
      });

      await mermaid.run({ nodes });
    };

    renderMermaid();
  }, []);

  return (
    <div
      ref={containerRef}
      id="readme"
      className={`readme ${styles.readme}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Readme;
