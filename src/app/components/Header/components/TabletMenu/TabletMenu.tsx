import { type ComponentPropsWithoutRef } from 'react';
import { pages } from '@/config/pages';
import styles from './TabletMenu.module.scss';
import HeaderActions from '../MobileMenu/components/HeaderActions/HeaderActions';

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
              <a
                className={styles.naviagtionAnchor}
                href={href}
                aria-current={currentPath === href ? 'page' : undefined}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <HeaderActions />
    </div>
  );
};

export default TabletMenu;
