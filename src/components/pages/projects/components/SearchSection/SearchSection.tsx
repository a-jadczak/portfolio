import React from 'react';
import styles from './SearchSection.module.scss';
import Button from '@/components/ui/Button/Button';
import { SlidersHorizontal } from 'lucide-react';

const SearchForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.searchContainer}>
        <input
          className={`clipped-corners ${styles.searchInput}`}
          type="text"
          placeholder="Search projects..."
        />
        <Button
          as="button"
          variant="default"
          text="Filters"
          Icon={SlidersHorizontal}
          className={styles.filterButton}
        />
      </div>
      <div className={styles.resultsContainer}>
        <span>6 projects</span>
        <button type="button" className={styles.clearFilters}>
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
