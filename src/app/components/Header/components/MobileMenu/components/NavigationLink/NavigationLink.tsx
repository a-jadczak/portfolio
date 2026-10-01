import styles from './NavigationLink.module.scss';
import type { Icon } from '@/types/Icon';

interface NavigationLinkProps {
  href: string;
  text: string;
  Icon: Icon;
  iconSize: number;
  'aria-current'?: 'page';
}

const NavigationLink = ({
  href,
  text,
  Icon,
  iconSize,
  'aria-current': ariaCurrent,
}: NavigationLinkProps) => (
  <a href={href} aria-current={ariaCurrent} className={`clipped-corners ${styles.navigationLink}`}>
    <Icon className={styles.navigationIcon} size={iconSize} aria-hidden="true" />
    <span className={styles.navigationText}>{text}</span>
  </a>
);

export default NavigationLink;
