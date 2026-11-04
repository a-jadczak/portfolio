import type { Icon } from '@/types/Icon';

export interface SegmentedControlOption<T> {
  text: string;
  value: T;
  Icon?: Icon;
  onClick: () => void;
}
