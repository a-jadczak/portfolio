import { useEffect, useRef } from 'react';
import { removeEmoji } from '@/utils/emoji';
import styles from './NavigationCarousel.module.scss';

interface Props {
  headings: string[];
}

const headingId = (heading: string) => removeEmoji(heading).toLowerCase().replace(' ', '-');

const NavigationCarousel = ({ headings }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const list = listRef.current;
    const dialog = list?.closest('dialog');

    if (!list || !dialog) return;

    let activeItem: Element | null = null;
    isScrolling.current = false;

    const onScrollEnd = () => {
      isScrolling.current = false;
    };
    dialog.addEventListener('scrollend', onScrollEnd);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const item = Array.from(list.querySelectorAll('li')).find(
            (element) => element.querySelector('a')?.getAttribute('href') === `#${entry.target.id}`
          );
          if (!item) return;

          activeItem?.setAttribute('data-active', 'false');
          item.setAttribute('data-active', 'true');

          activeItem = item;

          if (!isScrolling.current) {
            item.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
          }
        });
      },
      { root: dialog, rootMargin: '0px 0px -600px 0px', threshold: 0 }
    );

    dialog.querySelectorAll('#readme > h2').forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
      dialog.removeEventListener('scrollend', onScrollEnd);
    };
  }, []);

  return (
    <nav aria-label="Project sections" className={styles.navigation}>
      <ul ref={listRef} id="navigation-carousel" className={styles.navigationCarousel}>
        {headings.map((heading) => (
          <li key={heading} className={styles.navigationCarouselItem} data-active="false">
            <a href={`#${headingId(heading)}`} onClick={() => (isScrolling.current = true)}>
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationCarousel;
