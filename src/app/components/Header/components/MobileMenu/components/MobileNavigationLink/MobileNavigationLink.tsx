import styles from './MobileNavigationLink.module.scss';
import type { Icon } from '@/types/Icon';

interface MobileNavigationLinkProps {
  href: string;
  text: string;
  Icon: Icon;
  iconSize: number;
  'aria-current'?: 'page';
}

const MobileNavigationLink = ({
  href,
  text,
  Icon,
  iconSize,
  'aria-current': ariaCurrent,
}: MobileNavigationLinkProps) => (
  <a
    href={href}
    onClick={(event) => {
      if (ariaCurrent === 'page') {
        event.preventDefault();
      }
    }}
    aria-current={ariaCurrent}
    className={styles.navigationLink}
  >
    <Icon className={styles.navigationIcon} size={iconSize} aria-hidden="true" />
    <span className={styles.navigationText}>{text}</span>
  </a>
);

export default MobileNavigationLink;
