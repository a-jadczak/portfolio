import { type ComponentPropsWithoutRef } from 'react';
import { pages } from '@/config/pages';
import styles from './TabletMenu.module.scss';
import TabletNavigationLink from './components/TabletNavigationLink/TabletNavigationLink';
import HeaderActions from '@/app/components/Header/components/HeaderActions/HeaderActions';

interface TabletMenuProps extends ComponentPropsWithoutRef<'div'> {
  currentPath: string;
}

const TabletMenu = ({ currentPath, className }: TabletMenuProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <nav className={styles.navigationContainer}>
        <ul className={styles.navigationListContainer}>
          {pages.map(({ href, name }) => (
            <li className={styles.navigationItem} key={href}>
              <TabletNavigationLink href={href} currentPath={currentPath} text={name} />
            </li>
          ))}
        </ul>
      </nav>
      <HeaderActions />
    </div>
  );
};

export default TabletMenu;
