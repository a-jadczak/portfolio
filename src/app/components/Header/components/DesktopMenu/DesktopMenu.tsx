import { type ComponentPropsWithoutRef } from 'react';
import { pages } from '@/config/pages';
import styles from './DesktopMenu.module.scss';
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
              <a
                className={styles.naviagtionAnchor}
                href={href}
                onClick={(event) => {
                  if (currentPath === href) {
                    event.preventDefault();
                  }
                }}
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
