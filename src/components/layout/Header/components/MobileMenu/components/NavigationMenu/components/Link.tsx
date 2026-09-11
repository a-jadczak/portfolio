import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import styles from './Link.module.scss';

interface LinkProps {
  href: string;
  text: string;
  Icon: LucideIcon | IconType;
  iconSize: number;
  'aria-current'?: 'page';
}

const Link = ({ href, text, Icon, iconSize, 'aria-current': ariaCurrent }: LinkProps) => (
  <a href={href} aria-current={ariaCurrent} className={`clipped-corners ${styles.navigationLink}`}>
    <Icon className={styles.navigationIcon} size={iconSize} aria-hidden="true" />
    <span className={styles.navigationText}>{text}</span>
  </a>
);

export default Link;
