import { useState } from 'react';
import styles from './MobileMenu.module.scss';
import HeaderActions from './components/HeaderActions/HeaderActions';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import MenuButton from './components/MenuButton/MenuButton';

interface MobileMenuProps {
  currentPath: string;
}

const MobileMenu = ({ currentPath }: MobileMenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <MenuButton isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={toggleMobileMenu} />

      {isMobileMenuOpen && (
        <div
          id="navigation-menu"
          className={`clipped-corners ${styles.menuPanel}`}
          aria-label="Navigation menu"
        >
          <span>
            <small className={styles.menuLabel}>Menu</small>
          </span>
          <NavigationMenu currentPath={currentPath} />
          <HeaderActions />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
