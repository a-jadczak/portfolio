import { useRef, type SyntheticEvent } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import styles from './ColorPickerList.module.scss';
import { Pipette } from 'lucide-react';
import { useColorPicker } from '../../hooks/useColorPicker';

const ColorPickerList = () => {
  const { colors, colorSetting, setAccentColor } = useColorPicker();
  const { color: activeColor, index: activeIndex } = colorSetting;

  const inputRef = useRef<HTMLInputElement>(null);
  const lastColorIndex = colors.length;

  const handleCustomClick = () => inputRef.current?.click();

  const handleCustomColorChange = (event: SyntheticEvent<HTMLInputElement>) =>
    setAccentColor(event.currentTarget.value, lastColorIndex);

  return (
    <>
      <ul className={styles.list} aria-label="Accent color">
        {colors.map((color, index) => (
          <li key={color}>
            <ColorPicker
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
            aria-label="Choose custom color"
          >
            <Pipette size={16} aria-hidden="true" />
          </ColorPicker>
        </li>
      </ul>
      <input
        ref={inputRef}
        type="color"
        className={styles.colorInput}
        hidden
        value={activeColor}
        onInput={handleCustomColorChange}
        onChange={handleCustomColorChange}
      />
    </>
  );
};

export default ColorPickerList;
