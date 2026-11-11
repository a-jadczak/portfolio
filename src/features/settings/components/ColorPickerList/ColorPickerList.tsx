import { LanguageProvider } from '@/i18n/LanguageProvider';
import { useTranslations } from '@/i18n/useTranslations';
import type { Language } from '@/types/Language';
import { useRef, type SyntheticEvent } from 'react';
import ColorPicker from '@/features/settings/components/ColorPicker/ColorPicker';
import styles from './ColorPickerList.module.scss';
import { Pipette } from 'lucide-react';
import { useColorPicker } from '@/features/settings/hooks/useColorPicker';

const ColorPickerListContent = () => {
  const t = useTranslations().t.settingsDialog.accentColor;
  const { colors, colorSetting, setAccentColor } = useColorPicker();
  const { color: activeColor, index: activeIndex } = colorSetting;

  const inputRef = useRef<HTMLInputElement>(null);
  const lastColorIndex = colors.length;

  const handleCustomClick = () => inputRef.current?.click();

  const handleCustomColorChange = (event: SyntheticEvent<HTMLInputElement>) =>
    setAccentColor(event.currentTarget.value, lastColorIndex);

  return (
    <>
      <ul className={styles.list} aria-label={t.label}>
        {colors.map((color, index) => (
          <li key={color}>
            <ColorPicker
              aria-label={`${t.selectColor} ${color}`}
              color={color}
              active={activeIndex === index}
              onClick={() => setAccentColor(color, index)}
            />
          </li>
        ))}
        <li>
          <ColorPicker
            active={activeIndex === lastColorIndex}
            onClick={handleCustomClick}
            color={activeColor}
            aria-label={t.customColor}
          >
            <Pipette size={16} aria-hidden="true" />
          </ColorPicker>
        </li>
      </ul>
      <input
        ref={inputRef}
        type="color"
        aria-label={t.customColor}
        className={styles.colorInput}
        hidden
        value={activeColor}
        onInput={handleCustomColorChange}
        onChange={handleCustomColorChange}
      />
    </>
  );
};

const ColorPickerList = ({ lang }: { lang: Language }) => (
  <LanguageProvider lang={lang}>
    <ColorPickerListContent />
  </LanguageProvider>
);

export default ColorPickerList;
