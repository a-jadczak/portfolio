import styles from './SearchSection.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { openDialog } from '@/utils/dialog';
import { Search, SlidersHorizontal } from 'lucide-react';
import MultiSelect from '@/components/ui/MultiSelect/MultiSelect';
import Text from '@/components/ui/Text/Text';
import Divider from '@/components/ui/Divider/Divider';
import type { MultiValue } from 'react-select';
import type { FilterKey } from '../../types/FilterKey';
import { useProjectFiltersContext } from '../../context/ProjectFiltersContext';

const SearchSection = () => {
  const {
    searchValue,
    setSearchValue,
    filteredProjects,
    filterGroups,
    setSelectedFilters,
    selectedFilters,
    resetFilterValues,
  } = useProjectFiltersContext();

  const projectsCount = filteredProjects.length;

  const handleClick = () => {
    openDialog('filter-dialog');
  };

  const handleOnChange = (selected: MultiValue<string>, key: FilterKey) => {
    setSelectedFilters((previous) => ({
      ...previous,
      [key]: [...selected],
    }));
  };

  return (
    <div className={styles.form}>
      <div className={styles.searchContainer}>
        <div className={styles.searchField}>
          <Search className={styles.searchIcon} size={18} aria-hidden="true" />
          <input
            className={styles.searchInput}
            type="text"
            aria-label="Search projects"
            placeholder="Search projects..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className={styles.optionsContainer}>
          {filterGroups.map(({ options, label, category }) => (
            <MultiSelect
              key={category}
              options={[...options]}
              placeholder={label}
              value={selectedFilters[category]}
              onChange={(selected) => handleOnChange(selected, category)}
            />
          ))}

          <Divider className={styles.divider} />
          <div className={styles.resultsOptionsContainer}>
            <Text size="small" variant="secondary">
              {projectsCount} projects
            </Text>

            <Button variant="link" className={styles.clearFilters} onClick={resetFilterValues}>
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
