import { SlidersHorizontal } from 'lucide-react';
import Dialog from '@/components/ui/Dialog/Dialog';
import Divider from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import styles from './FilterDialog.module.scss';
import { Fragment } from 'react';

const filterGroups = [
  {
    id: 'project-technologies',
    label: 'Technologies',
    options: ['React', 'Vue', 'Angular', 'HTML', 'JavaScript', 'CSS'],
  },
  {
    id: 'project-type',
    label: 'Project Type',
    options: ['Web', 'Mobile', 'Desktop', 'CLI Tool', 'Other'],
  },
  {
    id: 'project-status',
    label: 'Status',
    options: ['Completed', 'In Progress', 'Archived'],
  },
];

const FilterDialog = () => {
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
            {options.map((option) => (
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
