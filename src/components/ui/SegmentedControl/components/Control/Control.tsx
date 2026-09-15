import styles from './Control.module.scss';
import type { Option } from '@/components/ui/SegmentedControl/types/Option';

const Control = ({ Icon, text }: Option) => {
  return (
    <button className={`clipped-corners-left ${styles.control}`}>
      {Icon != null && <Icon />}
      {text}
    </button>
  );
};

export default Control;
