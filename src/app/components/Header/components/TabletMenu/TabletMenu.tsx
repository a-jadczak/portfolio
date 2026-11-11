import { type ComponentPropsWithoutRef } from 'react';
import styles from './TabletMenu.module.scss';
import TabletNavigationMenu from './components/TabletNavigationMenu/TabletNavigationMenu';
import HeaderActions from '@/app/components/Header/components/HeaderActions/HeaderActions';
import type { Language } from '@/types/Language';
import { LanguageProvider } from '@/i18n/LanguageProvider';

interface TabletMenuProps extends ComponentPropsWithoutRef<'div'> {
  currentPath: string;
  lang: Language;
}

const TabletMenu = ({ currentPath, lang, className }: TabletMenuProps) => {
  return (
    <LanguageProvider lang={lang}>
      <div className={`${styles.container} ${className}`}>
        <TabletNavigationMenu currentPath={currentPath} />
        <HeaderActions lang={lang} />
      </div>
    </LanguageProvider>
  );
};

export default TabletMenu;
