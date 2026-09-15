import styles from './SegmentedControl.module.scss';
import Control from './components/Control/Control';
import type { Option } from '@/components/ui/SegmentedControl/types/Option';

interface Props {
  options: Option[];
  value: string;
}

const SegmentedControl = ({ options }: Props) => {
  return (
    <div className={styles.segmentedControl}>
      {options.map((control) => (
        <Control {...control} />
      ))}
    </div>
  );
};

export default SegmentedControl;
