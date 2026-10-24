import React, { type ComponentPropsWithoutRef } from 'react';
import { pages } from '@/config/pages';
import styles from './TabletMenu.module.scss';

interface TabletMenuProps extends ComponentPropsWithoutRef<'div'> {
  currentPath: string;
}

const TabletMenu = ({ currentPath, className }: TabletMenuProps) => {
  return (
    <div className={className}>
      <nav>
        <ul className={styles.navigationContainer}>
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
    </div>
  );
};

export default TabletMenu;
