import { LanguageProvider } from '@/i18n/LanguageProvider';
import { useTranslations } from '@/i18n/useTranslations';
import type { Language } from '@/types/Language';
import { Moon, Sun } from 'lucide-react';
import SegmentedControl from '@/components/ui/SegmentedControl/SegmentedControl';
import type { Theme } from '@/types/Theme';
import type { SegmentedControlOption } from '@/components/ui/SegmentedControl/types/SegmentedControlOption';
import type { Nullable } from '@/types/Nullable';
import { useEffect, useState } from 'react';

const setTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
};

const ThemeControlContent = () => {
  const t = useTranslations().t.settingsDialog.theme;
  const options: SegmentedControlOption<Theme>[] = [
    { Icon: Sun, text: t.light, value: 'light', onClick: () => setTheme('light') },
    { Icon: Moon, text: t.dark, value: 'dark', onClick: () => setTheme('dark') },
  ];

  const [preferredTheme, setPreferredTheme] = useState<Nullable<Theme>>(null);

  useEffect(() => {
    if (document.documentElement.dataset.theme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreferredTheme(document.documentElement.dataset.theme as Theme);
    }
  }, []);

  if (!preferredTheme) return null;

  return <SegmentedControl options={options} value={preferredTheme as Theme} />;
};

const ThemeControl = ({ lang }: { lang: Language }) => (
  <LanguageProvider lang={lang}>
    <ThemeControlContent />
  </LanguageProvider>
);

export default ThemeControl;
