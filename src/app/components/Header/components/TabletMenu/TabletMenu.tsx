import { type ComponentPropsWithoutRef } from 'react';
import styles from './TabletMenu.module.scss';
import TabletNavigationMenu from './components/TabletNavigationMenu/TabletNavigationMenu';
import HeaderActions from '@/app/components/Header/components/HeaderActions/HeaderActions';

interface TabletMenuProps extends ComponentPropsWithoutRef<'div'> {
  currentPath: string;
}

const TabletMenu = ({ currentPath, className }: TabletMenuProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <TabletNavigationMenu currentPath={currentPath} />
      <HeaderActions />
    </div>
  );
};

export default TabletMenu;
