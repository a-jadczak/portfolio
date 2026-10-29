import styles from './Control.module.scss';
import type { SegmentedControlOption } from '@/components/ui/SegmentedControl/types/SegmentedControlOption';

interface Props {
  options: SegmentedControlOption;
  active: boolean;
  onClick: () => void;
}

const Control = ({ options, active, onClick }: Props) => {
  const { text, Icon } = options;
  return (
    <button onClick={onClick} className={styles.control} aria-pressed={active}>
      {Icon != null && <Icon />}
      {text}
    </button>
  );
};

export default Control;
