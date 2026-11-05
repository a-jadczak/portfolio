import { useState, type ComponentPropsWithoutRef } from 'react';
import styles from './MobileMenu.module.scss';
import HeaderActions from '@/app/components/Header/components/HeaderActions/HeaderActions';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';
import MenuButton from './components/MenuButton/MenuButton';

interface MobileMenuProps extends ComponentPropsWithoutRef<'div'> {
  currentPath: string;
}

const MobileMenu = ({ currentPath, ...props }: MobileMenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  return (
    <div {...props}>
      <MenuButton isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={toggleMobileMenu} />

      {isMobileMenuOpen && (
        <div id="navigation-menu" className={styles.menuPanel} aria-label="Navigation menu">
          <span>
            <small className={styles.menuLabel}>Menu</small>
          </span>
          <MobileNavigationMenu currentPath={currentPath} />
          <HeaderActions />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
