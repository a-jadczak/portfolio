import { FolderClosed, Home as HomeIcon, Mail, User } from 'lucide-react';
import { pages, type PageName } from '@/config/pages';
import type { Icon } from '@/types/Icon';
import MobileNavigationLink from '@/app/components/Header/components/MobileMenu/components/MobileNavigationLink/MobileNavigationLink';
import styles from './MobileNavigationMenu.module.scss';
import { useTranslations } from '@/i18n/useTranslations';

const ICON_SIZE = 20;

const pageIcons = {
  home: HomeIcon,
  about: User,
  projects: FolderClosed,
  contact: Mail,
} satisfies Record<PageName, Icon>;

interface MobileNavigationMenuProps {
  currentPath: string;
}

const MobileNavigationMenu = ({ currentPath }: MobileNavigationMenuProps) => {
  const { t } = useTranslations();

  return (
    <nav className={styles.navigation} aria-label={t.header.navigation.navigationLabel}>
      <ul className={styles.navigationList}>
        {pages.map(({ href, name }) => (
          <li className={styles.navigationItem} key={href}>
            <MobileNavigationLink
              href={href}
              text={t.header.navigation[name]}
              Icon={pageIcons[name]}
              iconSize={ICON_SIZE}
              aria-current={currentPath === href ? 'page' : undefined}
            />
            <div className={styles.navigationDivider} aria-hidden="true" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigationMenu;
