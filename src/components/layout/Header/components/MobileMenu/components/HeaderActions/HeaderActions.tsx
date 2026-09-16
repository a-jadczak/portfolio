import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import ExternalLink from './components/ExternalLink/ExternalLink';
import SettingsButton from './components/SettingsButton/SettingsButton';
import styles from './HeaderActions.module.scss';
import Button from '@/components/ui/Button/Button';

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

    <Button
      as="a"
      href="/resume.pdf"
      target="_blank"
      text="Resume"
      variant="primary"
      style={{ fontSize: '0.8rem' }}
      Icon={FaFilePdf}
    />
  </div>
);

export default HeaderActions;
