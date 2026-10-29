import type { Icon } from '@/types/Icon';

export interface SegmentedControlOption {
  text: string;
  Icon?: Icon;
  onClick: () => void;
}
