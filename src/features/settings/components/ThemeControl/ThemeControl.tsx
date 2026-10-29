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

const options: SegmentedControlOption[] = [
  { Icon: Sun, text: 'light', onClick: () => setTheme('light') },
  { Icon: Moon, text: 'dark', onClick: () => setTheme('dark') },
];

const ThemeControl = () => {
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

export default ThemeControl;
