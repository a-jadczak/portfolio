import { SlidersHorizontal } from 'lucide-react';
import Dialog from '@/components/ui/Dialog/Dialog';
import Divider from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import styles from './FilterDialog.module.scss';
import { Fragment } from 'react';
import type { ProjectsFilterData } from '@/types/ProjectsFilterData';

const FilterDialog = ({ technologies, types, statuses }: ProjectsFilterData) => {
  const filterGroups = [
    {
      id: 'project-technologies',
      label: 'Technologies',
      options: technologies,
    },
    {
      id: 'project-type',
      label: 'Project Type',
      options: types,
    },
    {
      id: 'project-status',
      label: 'Status',
      options: statuses,
    },
  ];

  return (
    <Dialog id="filter-dialog" title="Filter" titleId="filter-title" Icon={SlidersHorizontal}>
      <Divider />
      {filterGroups.map(({ id, label, options }) => (
        <Fragment key={id}>
          <div id={`${id}-label`}>{label}</div>
          <div
            className={styles.checkboxContainer}
            id={id}
            role="group"
            aria-labelledby={`${id}-label`}
          >
            {[...options].map((option) => (
              <Checkbox key={option} label={option} />
            ))}
          </div>
          <Divider />
        </Fragment>
      ))}
      <div className={styles.buttonsContainer}>
        <Button variant="link">Reset filters</Button>
        <Button variant="primary">Apply</Button>
      </div>
    </Dialog>
  );
};

export default FilterDialog;
