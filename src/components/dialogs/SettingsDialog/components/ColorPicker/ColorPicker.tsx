import styles from './ColorPicker.module.scss';
import { Pipette } from 'lucide-react';

interface Props {
  color?: string;
  onClick?: () => void;
}

const ColorPicker = ({ color, onClick }: Props) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      className={`clipped-corners ${styles.colorBox}`}
      style={{ backgroundColor: color }}
      // aria-active="true"
      onClick={handleClick}
    >
      {!color && <Pipette size={16} />}
    </button>
  );
};

export default ColorPicker;
