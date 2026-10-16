import { SlidersHorizontal } from 'lucide-react';
import Dialog from '@/components/ui/Dialog/Dialog';
import Divider from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import styles from './FilterDialog.module.scss';
import { Fragment, type ChangeEvent } from 'react';
import type { ProjectsFilterData } from '@/types/ProjectsFilterData';
import type { SelectedFilters } from '@/features/projects/types/SelectedFilters';

interface Props {
  selectedFilters: ProjectsFilterData;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
}

type FilterKey = 'technologies' | 'types' | 'statuses';

const FilterDialog = ({ selectedFilters, setSelectedFilters }: Props) => {
  const { technologies, types, statuses } = selectedFilters;

  const filterGroups: {
    id: string;
    label: string;
    category: FilterKey;
    options: Set<string>;
  }[] = [
    {
      id: 'project-technologies',
      label: 'Technologies',
      category: 'technologies',
      options: technologies,
    },
    {
      id: 'project-type',
      label: 'Project Type',
      category: 'types',
      options: types,
    },
    {
      id: 'project-status',
      label: 'Status',
      category: 'statuses',
      options: statuses,
    },
  ];

  const addFilterValue = (key: FilterKey, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }));
  };

  const removeFilterValue = (key: FilterKey, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: prev[key].filter((item: string) => item !== value),
    }));
  };

  const resetFilterValues = () => {
    setSelectedFilters({
      technologies: [],
      types: [],
      statuses: [],
    });
  };

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
            {[...options].map((option) => (
              <Checkbox
                key={option}
                label={option}
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
