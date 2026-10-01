import styles from './ColorPicker.module.scss';
import { Pipette } from 'lucide-react';

interface Props {
  color?: string;
  'aria-label'?: string;
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ColorPicker = ({ color, active = false, onClick, children, 'aria-label': label }: Props) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      className={`clipped-corners ${styles.colorBox}`}
      style={{ backgroundColor: color }}
      aria-label={label ?? (color ? `Select ${color}` : 'Choose custom color')}
      aria-pressed={active}
      onClick={handleClick}
    >
      {children}
      {!color && <Pipette size={16} aria-hidden="true" />}
    </button>
  );
};

export default ColorPicker;
