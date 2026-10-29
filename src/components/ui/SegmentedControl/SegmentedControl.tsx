import { useState } from 'react';
import styles from './SegmentedControl.module.scss';
import Control from './components/Control/Control';
import type { SegmentedControlOption } from '@/components/ui/SegmentedControl/types/SegmentedControlOption';

interface Props {
  options: SegmentedControlOption[];
  value: string;
}

const SegmentedControl = ({ options, value }: Props) => {
  const [active, setActive] = useState<number>(
    options.findIndex((option) => option.text === value)
  );

  const handleControlClick = (index: number) => {
    if (active === index) return;

    setActive(index);
    options[index].onClick();
  };

  return (
    <div className={styles.segmentedControl}>
      {options.map((control, index) => (
        <Control
          options={control}
          key={control.text}
          active={active === index}
          onClick={() => handleControlClick(index)}
        />
      ))}
    </div>
  );
};

export default SegmentedControl;
