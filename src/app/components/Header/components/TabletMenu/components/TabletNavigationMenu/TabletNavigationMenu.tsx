import { pages } from '@/config/pages';
import TabletNavigationLink from '../TabletNavigationLink/TabletNavigationLink';
import styles from './TabletNavigationMenu.module.scss';

interface TabletNavigationMenuProps {
  currentPath: string;
}

const TabletNavigationMenu = ({ currentPath }: TabletNavigationMenuProps) => (
  <nav className={styles.navigationContainer}>
    <ul className={styles.navigationListContainer}>
      {pages.map(({ href, name }) => (
        <li className={styles.navigationItem} key={href}>
          <TabletNavigationLink href={href} currentPath={currentPath} text={name} />
        </li>
      ))}
    </ul>
  </nav>
);

export default TabletNavigationMenu;
