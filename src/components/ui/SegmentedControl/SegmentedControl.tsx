import styles from './SegmentedControl.module.scss';
import Control from './components/Control/Control';
import type { Option } from '@/components/ui/SegmentedControl/types/Option';

interface Props {
  options: Option[];
  value: string;
}

const SegmentedControl = ({ options }: Props) => {
  const [left, right] = options;
  return (
    <div className={styles.segmentedControl}>
      <Control {...left} />
      <Control {...right} />
    </div>
  );
};

export default SegmentedControl;
