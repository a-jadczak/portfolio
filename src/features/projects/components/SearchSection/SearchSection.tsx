import styles from './SearchSection.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { openDialog } from '@/utils/dialog';
import { SlidersHorizontal } from 'lucide-react';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  projectsCount: number;
}

const SearchSection = ({ searchValue, setSearchValue, projectsCount }: Props) => {
  const handleClick = () => {
    openDialog('filter-dialog');
  };

  return (
    <div className={styles.form}>
      <div className={styles.searchContainer}>
        <input
          className={`clipped-corners ${styles.searchInput}`}
          type="text"
          placeholder="Search projects..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button variant="default" className={styles.filterButton} onClick={handleClick}>
          <span>Filters</span>
          <SlidersHorizontal size={18} aria-hidden="true" />
        </Button>
      </div>
      <div className={styles.resultsContainer}>
        <span>{projectsCount} projects</span>
      </div>
    </div>
  );
};

export default SearchSection;
