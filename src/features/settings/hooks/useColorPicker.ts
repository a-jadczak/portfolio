import type { ColorSetting } from '../types/ColorSetting';
import { useEffect, useState } from 'react';

const DEFAULT_COLOR = '#7038e8';

const colors: string[] = [DEFAULT_COLOR, '#FF0000', '#0FFF50', '#DAA520'];

export const DEFAULT_COLOR_SETTING: ColorSetting = {
  color: DEFAULT_COLOR,
  index: 0,
};

const readAccentColor = (): ColorSetting => {
  try {
    const stored = localStorage.getItem('accentColor');
    if (!stored) return DEFAULT_COLOR_SETTING;
    const parsed: ColorSetting = JSON.parse(stored);
    return parsed;
  } catch {
    return DEFAULT_COLOR_SETTING;
  }
};

export const useColorPicker = () => {
  const [colorSetting, setColorSetting] = useState<ColorSetting>(DEFAULT_COLOR_SETTING);

  useEffect(() => {
    const storedColorSetting = readAccentColor();
    setColorSetting(storedColorSetting);
  }, []);

  const setAccentColor = (color: string, index: number) => {
    document.documentElement.style.setProperty('--primary', color);
    setColorSetting({ color, index });
    try {
      localStorage.setItem('accentColor', JSON.stringify({ color, index } satisfies ColorSetting));
    } catch {
      throw new Error('Failed to save accent color to localStorage');
    }
  };

  return {
    colors,
    colorSetting,
    setAccentColor,
  };
};
