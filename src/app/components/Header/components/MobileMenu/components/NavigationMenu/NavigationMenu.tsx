import { FolderClosed, Home as HomeIcon, Mail, User } from 'lucide-react';
import { pages, type PageName } from '@/config/pages';
import type { Icon } from '@/types/Icon';
import NavigationLink from '../NavigationLink/NavigationLink';
import styles from './NavigationMenu.module.scss';

const ICON_SIZE = 20;

const pageIcons = {
  Home: HomeIcon,
  About: User,
  Projects: FolderClosed,
  Contact: Mail,
} satisfies Record<PageName, Icon>;

interface NavigationMenuProps {
  currentPath: string;
}

const NavigationMenu = ({ currentPath }: NavigationMenuProps) => (
  <nav className={styles.navigation} aria-label="Navigation">
    <ul className={styles.navigationList}>
      {pages.map(({ href, name }) => (
        <li className={styles.navigationItem} key={href}>
          <NavigationLink
            href={href}
            text={name}
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

export default NavigationMenu;
