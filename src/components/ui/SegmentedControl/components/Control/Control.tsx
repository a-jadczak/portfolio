import styles from './Control.module.scss';
import type { SegmentedControlOption } from '@/components/ui/SegmentedControl/types/SegmentedControlOption';

interface Props<T> {
  options: SegmentedControlOption<T>;
  active: boolean;
  onClick: () => void;
}

const Control = <T,>({ options, active, onClick }: Props<T>) => {
  const { text, Icon } = options;
  return (
    <button onClick={onClick} className={styles.control} aria-pressed={active}>
      {Icon != null && <Icon />}
      {text}
    </button>
  );
};

export default Control;
