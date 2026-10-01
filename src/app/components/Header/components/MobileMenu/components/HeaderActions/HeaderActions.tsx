import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import ExternalLink from '../ExternalLink/ExternalLink';
import SettingsButton from '../SettingsButton/SettingsButton';
import styles from './HeaderActions.module.scss';
import { ButtonLink } from '@/components/ui/Button/ButtonLink';

const ICON_SIZE = 18;
const externalLinks = [
  { href: 'https://github.com/a-jadczak', label: 'GitHub', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/arkadiusz-jadczak-27458b42b/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
  },
];

const HeaderActions = () => (
  <div className={styles.externalContainer}>
    <ul className={styles.externalList}>
      {externalLinks.map((link) => (
        <li className={styles.externalItem} key={link.href}>
          <ExternalLink {...link} iconSize={ICON_SIZE} />
        </li>
      ))}
      <li className={styles.externalItem}>
        <SettingsButton iconSize={ICON_SIZE} />
      </li>
    </ul>

    <ButtonLink href="/resume.pdf" target="_blank" variant="primary" style={{ fontSize: '0.8rem' }}>
      <span>Resume</span>
      <FaFilePdf size={18} aria-hidden="true" />
    </ButtonLink>
  </div>
);

export default HeaderActions;
