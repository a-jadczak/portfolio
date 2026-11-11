import styles from './SearchSection.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { openDialog } from '@/utils/dialog';
import { Search, SlidersHorizontal } from 'lucide-react';
import MultiSelect from '@/components/ui/MultiSelect/MultiSelect';
import Text from '@/components/ui/Text/Text';
import Divider from '@/components/ui/Divider/Divider';
import Input from '@/components/ui/Input/Input';
import type { MultiValue } from 'react-select';
import type { FilterKey } from '@/features/projects/types/FilterKey';
import { useProjectFiltersContext } from '@/features/projects/context/ProjectFiltersContext';
import { useTranslations } from '@/i18n/useTranslations';

const SearchSection = () => {
  const t = useTranslations().t.pages.projects;
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
        <Input
          containerClassName={styles.searchField}
          startIcon={Search}
          type="text"
          aria-label={t.search.label}
          placeholder={t.search.placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className={styles.optionsContainer}>
          {filterGroups.map(({ options, category }) => (
            <MultiSelect
              key={category}
              options={[...options]}
              placeholder={t.search.filterLabels[category]}
              value={selectedFilters[category]}
              onChange={(selected) => handleOnChange(selected, category)}
            />
          ))}

          <Divider className={styles.divider} />
          <div className={styles.resultsOptionsContainer}>
            <Text size="small" variant="secondary">
              {t.search.countLabel} {projectsCount}
            </Text>

            <Button variant="link" className={styles.clearFilters} onClick={resetFilterValues}>
              {t.search.clearFilters}
            </Button>
          </div>
        </div>
        <Button variant="default" className={styles.filterButton} onClick={handleClick}>
          <SlidersHorizontal size={18} aria-hidden="true" />
          <span>{t.search.filters}</span>
        </Button>
      </div>
      <div className={styles.resultsContainer}>
        <span>
          {t.search.countLabel} {projectsCount}
        </span>
        <Button variant="link" className={styles.clearFilters} onClick={resetFilterValues}>
          {t.search.clearFilters}
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;
