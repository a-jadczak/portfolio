import { SlidersHorizontal } from 'lucide-react';
import Dialog from '@/components/ui/Dialog/Dialog';
import Divider from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import styles from './FilterDialog.module.scss';
import { Fragment, type ChangeEvent } from 'react';
import type { FilterKey } from '@/features/projects/types/FilterKey';
import { useProjectFiltersContext } from '../../context/ProjectFiltersContext';

const FilterDialog = () => {
  const { selectedFilters, addFilterValue, removeFilterValue, resetFilterValues, filterGroups } =
    useProjectFiltersContext();

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>, key: FilterKey, option: string) => {
    if (e.target.checked) {
      addFilterValue(key, option);
    } else {
      removeFilterValue(key, option);
    }
  };

  return (
    <Dialog id="filter-dialog" title="Filter" titleId="filter-title" Icon={SlidersHorizontal}>
      <Divider />
      {filterGroups.map(({ id, label, category, options }) => (
        <Fragment key={id}>
          <div id={`${id}-label`}>{label}</div>
          <div
            className={styles.checkboxContainer}
            id={id}
            role="group"
            aria-labelledby={`${id}-label`}
          >
            {options.map((option) => (
              <Checkbox
                key={option}
                label={option}
                checked={selectedFilters[category].includes(option)}
                onChange={(e) => handleCheckbox(e, category, option)}
              />
            ))}
          </div>
          <Divider />
        </Fragment>
      ))}
      <div className={styles.buttonsContainer}>
        <Button onClick={resetFilterValues} variant="link">
          Reset filters
        </Button>
      </div>
    </Dialog>
  );
};

export default FilterDialog;
