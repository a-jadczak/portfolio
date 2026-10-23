import type { ProjectsFilterData } from '@/types/ProjectsFilterData';
import styles from './SearchSection.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { openDialog } from '@/utils/dialog';
import { Search, SlidersHorizontal } from 'lucide-react';
import MultiSelect from '@/components/ui/MultiSelect/MultiSelect';
import Text from '@/components/ui/Text/Text';
import Divider from '@/components/ui/Divider/Divider';

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
        <div className={styles.searchField}>
          <Search className={styles.searchIcon} size={18} aria-hidden="true" />
          <input
            className={`clipped-corners ${styles.searchInput}`}
            type="text"
            aria-label="Search projects"
            placeholder="Search projects..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

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

          <Divider className={styles.divider} />
          <div className={styles.resultsOptionsContainer}>
            <Text size="small" variant="secondary">
              {projectsCount} projects
            </Text>

            <Button variant="link" className={styles.clearFilters}>
              Clear Filters
            </Button>
          </div>
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
