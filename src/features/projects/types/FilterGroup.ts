import type { FilterKey } from './FilterKey';

export interface FilterGroup {
  id: string;
  label: string;
  category: FilterKey;
  options: string[];
}
