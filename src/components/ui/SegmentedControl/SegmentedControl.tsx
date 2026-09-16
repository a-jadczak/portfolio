import { useState } from 'react';
import styles from './SegmentedControl.module.scss';
import Control from './components/Control/Control';
import type { Option } from '@/components/ui/SegmentedControl/types/Option';

interface Props {
  options: Option[];
  value: string;
}

const SegmentedControl = ({ options }: Props) => {
  const [active, setActive] = useState<number>(0);
  const handleControlClick = (index: number) => {
    if (active === index) return;

    setActive(index);
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
