import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
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
      {externalLinks.map(({ href, label, Icon }) => (
        <li className={styles.externalItem} key={href}>
          <ButtonLink iconOnly href={href} target="_blank" rel="noopener" aria-label={label}>
            <Icon size={ICON_SIZE} aria-hidden="true" />
          </ButtonLink>
        </li>
      ))}
      <li className={styles.externalItem}>
        <SettingsButton iconSize={ICON_SIZE} />
      </li>
    </ul>

    <ButtonLink
      href="/resume.pdf"
      target="_blank"
      variant="primary"
      className={styles.resumeButton}
    >
      <span>Resume</span>
      <FaFilePdf size={16} aria-hidden="true" />
    </ButtonLink>
  </div>
);

export default HeaderActions;
