import { Menu, X } from 'lucide-react';
import styles from './MenuButton.module.scss';

const MenuButton = ({
  isMobileMenuOpen,
  onToggleMobileMenu,
}: {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}) => {
  return (
    <button
      id="menu"
      type="button"
      className={`clipped-corners ${styles.menuButton}`}
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      aria-controls="navigation-menu"
      aria-expanded={isMobileMenuOpen}
      onClick={onToggleMobileMenu}
    >
      {isMobileMenuOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </button>
  );
};

export default MenuButton;
