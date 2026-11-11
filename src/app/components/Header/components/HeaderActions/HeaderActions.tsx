import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import SettingsButton from '@/app/components/Header/components/SettingsButton/SettingsButton';
import styles from './HeaderActions.module.scss';
import { ButtonLink } from '@/components/ui/Button/ButtonLink';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import type { Language } from '@/types/Language';
import { useTranslations } from '@/i18n/useTranslations';

const ICON_SIZE = 22;
const externalLinks = [
  { href: 'https://github.com/a-jadczak', label: 'GitHub', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/arkadiusz-jadczak-27458b42b/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
  },
];

const HeaderActionsContent = () => {
  const { t } = useTranslations();
  return (
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
        <span>{t.header.settings.resume}</span>
        <FaFilePdf size={16} aria-hidden="true" />
      </ButtonLink>
    </div>
  );
};
const HeaderActions = ({ lang }: { lang: Language }) => (
  <LanguageProvider lang={lang}>
    <HeaderActionsContent />
  </LanguageProvider>
);

export default HeaderActions;
