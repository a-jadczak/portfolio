import styles from './SearchSection.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { SlidersHorizontal } from 'lucide-react';

const SearchSection = () => {
  return (
    <div className={styles.form}>
      <div className={styles.searchContainer}>
        <input
          className={`clipped-corners ${styles.searchInput}`}
          type="text"
          placeholder="Search projects..."
        />
        <Button variant="default" className={styles.filterButton}>
          <span>Filters</span>
          <SlidersHorizontal size={18} aria-hidden="true" />
        </Button>
      </div>
      <div className={styles.resultsContainer}>
        <span>6 projects</span>
        <Button variant="link" className={styles.clearFilters}>
          Clear filters
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;
