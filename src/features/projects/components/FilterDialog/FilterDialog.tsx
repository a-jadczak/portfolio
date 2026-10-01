import { SlidersHorizontal } from 'lucide-react';
import Dialog from '@/components/ui/Dialog/Dialog';

const FilterDialog = () => {
  return (
    <Dialog id="filter-dialog" title="Filter" titleId="filter-title" Icon={SlidersHorizontal} />
  );
};

export default FilterDialog;
