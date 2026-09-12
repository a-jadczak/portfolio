import type { Icon } from '@/types/Icon';
import styles from './../IconAction.module.scss';

interface ExternalLinkProps {
  href: string;
  label: string;
  Icon: Icon;
  iconSize: number;
}

const ExternalLink = ({ href, label, Icon, iconSize }: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className={`clipped-corners ${styles.iconAction}`}
    aria-label={label}
  >
    <Icon size={iconSize} aria-hidden="true" />
  </a>
);

export default ExternalLink;
