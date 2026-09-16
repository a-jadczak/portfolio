import styles from './Control.module.scss';
import type { Option } from '@/components/ui/SegmentedControl/types/Option';

interface Props {
  options: Option;
  active: boolean;
  onClick: () => void;
}

const Control = ({ options, active, onClick }: Props) => {
  const { text, Icon } = options;
  return (
    <button onClick={onClick} className={`${styles.control}`} aria-active={active}>
      {Icon != null && <Icon />}
      {text}
    </button>
  );
};

export default Control;
