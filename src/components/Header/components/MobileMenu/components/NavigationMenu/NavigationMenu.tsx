import { FolderOpen, Home, Mail, User } from 'lucide-react';
import Link from './components/Link';
import styles from './NavigationMenu.module.scss';

const ICON_SIZE = 20;
const pages = [
  { href: '/', text: 'Home', Icon: Home },
  { href: '/about', text: 'About', Icon: User },
  { href: '/projects', text: 'Projects', Icon: FolderOpen },
  { href: '/contact', text: 'Contact', Icon: Mail },
];

interface NavigationMenuProps {
  currentPath: string;
}

const NavigationMenu = ({ currentPath }: NavigationMenuProps) => (
  <nav className={styles.navigation} aria-label="Navigation">
    <ul className={styles.navigationList}>
      {pages.map((page) => (
        <li className={styles.navigationItem} key={page.href}>
          <Link
            {...page}
            iconSize={ICON_SIZE}
            aria-current={currentPath === page.href ? 'page' : undefined}
          />
          <div className={styles.navigationDivider} aria-hidden="true" />
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationMenu;
