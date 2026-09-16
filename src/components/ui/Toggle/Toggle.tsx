import { useState } from 'react';
import styles from './Toggle.module.scss';

interface Props {
  'aria-label': string;
  'aria-describedby'?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
}

const Toggle = ({
  'aria-label': label,
  'aria-describedby': describedBy,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  id,
  className = '',
}: Props) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked ?? internalChecked;

  const handleClick = () => {
    const nextChecked = !isChecked;
    if (checked === undefined) setInternalChecked(nextChecked);
    onChange?.(nextChecked);
  };

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-label={label}
      aria-describedby={describedBy}
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleClick}
      className={`clipped-corners ${styles.toggle} ${className}`}
    >
      <span className={`clipped-corners ${styles.thumb}`} aria-hidden="true" />
    </button>
  );
};

export default Toggle;
