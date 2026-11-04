import { useState } from 'react';
import styles from './SegmentedControl.module.scss';
import Control from './components/Control/Control';
import type { SegmentedControlOption } from '@/components/ui/SegmentedControl/types/SegmentedControlOption';

interface Props<T extends string | number> {
  options: SegmentedControlOption<T>[];
  value: T;
}

const SegmentedControl = <T extends string | number>({ options, value }: Props<T>) => {
  const [active, setActive] = useState<number>(
    options.findIndex((option) => option.value === value)
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
          key={control.value}
          active={active === index}
          onClick={() => handleControlClick(index)}
        />
      ))}
    </div>
  );
};

export default SegmentedControl;
