import { useRef, useState, type ChangeEvent } from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';
import styles from './ColorPickerList.module.scss';
import { Pipette } from 'lucide-react';

interface Props {
  colors: string[];
}

const ColorPickerList = ({ colors }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [customColor, setCustomColor] = useState('#7038e8');
  const inputRef = useRef<HTMLInputElement>(null);
  const customIndex = colors.length;

  const handleCustomClick = () => {
    setActiveIndex(customIndex);
    inputRef.current?.click();
  };

  const handleCustomColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomColor(event.target.value);
    setActiveIndex(customIndex);
  };

  return (
    <>
      <ul className={styles.list} aria-label="Accent color">
        {colors.map((color, index) => (
          <li key={color}>
            <ColorPicker
              color={color}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          </li>
        ))}
        <li>
          <ColorPicker
            active={activeIndex === customIndex}
            onClick={handleCustomClick}
            color={customColor}
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
        value={customColor}
        onChange={handleCustomColorChange}
      />
    </>
  );
};

export default ColorPickerList;
