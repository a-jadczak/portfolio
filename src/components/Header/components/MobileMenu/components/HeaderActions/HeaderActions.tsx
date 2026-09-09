import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ExternalLink from './components/ExternalLink/ExternalLink';
import ResumeLink from './components/ResumeLink/ResumeLink';
import SettingsButton from './components/SettingsButton/SettingsButton';
import styles from './HeaderActions.module.scss';

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

    <ResumeLink href="/resume.pdf" />
  </div>
);

export default HeaderActions;
