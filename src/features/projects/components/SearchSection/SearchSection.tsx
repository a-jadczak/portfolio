import type { ProjectsFilterData } from '@/types/ProjectsFilterData';
import styles from './SearchSection.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { openDialog } from '@/utils/dialog';
import { SlidersHorizontal } from 'lucide-react';
import MultiSelect from '@/components/ui/MultiSelect/MultiSelect';

interface Props {
  projectsFilterData: ProjectsFilterData;
  searchValue: string;
  setSearchValue: (value: string) => void;
  projectsCount: number;
}

const SearchSection = ({
  searchValue,
  setSearchValue,
  projectsCount,
  projectsFilterData,
}: Props) => {
  const { technologies, types, statuses } = projectsFilterData;

  const handleClick = () => {
    openDialog('filter-dialog');
  };

  return (
    <div className={styles.form}>
      <div className={`clipped-corners ${styles.searchContainer}`}>
        <input
          className={`clipped-corners ${styles.searchInput}`}
          type="text"
          placeholder="Search projects..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className={styles.optionsContainer}>
          <MultiSelect
            options={[...technologies].map((value) => ({ value, label: value }))}
            placeholder="Technologies"
          />
          <MultiSelect
            options={[...types].map((value) => ({ value, label: value }))}
            placeholder="Type"
          />
          <MultiSelect
            options={[...statuses].map((value) => ({ value, label: value }))}
            placeholder="Status"
          />
        </div>
        <Button variant="default" className={styles.filterButton} onClick={handleClick}>
          <SlidersHorizontal size={18} aria-hidden="true" />
          <span>Filters</span>
        </Button>
      </div>
      <div className={styles.resultsContainer}>
        <span>{projectsCount} projects</span>
      </div>
    </div>
  );
};

export default SearchSection;
