import { useState, type ComponentPropsWithoutRef } from 'react';
import styles from './MobileMenu.module.scss';
import HeaderActions from '@/app/components/Header/components/HeaderActions/HeaderActions';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';
import MenuButton from './components/MenuButton/MenuButton';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import type { Language } from '@/types/Language';

interface MobileMenuProps extends ComponentPropsWithoutRef<'div'> {
  currentPath: string;
  lang: Language;
}

const MobileMenuContent = ({ currentPath, ...props }: Omit<MobileMenuProps, 'lang'>) => {
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

const MobileMenu = ({ lang, ...props }: MobileMenuProps) => {
  return (
    <LanguageProvider lang={lang}>
      <MobileMenuContent {...props} />
    </LanguageProvider>
  );
};

export default MobileMenu;
