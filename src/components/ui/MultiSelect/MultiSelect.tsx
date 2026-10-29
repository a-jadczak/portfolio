import { useEffect, useId, useState } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import Select, { type MultiValue } from 'react-select';
import styles from './MultiSelect.module.scss';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: string[];
  placeholder?: string;
  value?: MultiValue<string>;
  onChange?: (selected: MultiValue<string>) => void;
}

const MultiSelect = ({ options, value, onChange, ...props }: Props) => {
  const instanceId = useId();
  // Astro removes runtime styles on navigation, so a fresh cache reinserts them on mount.
  const [cache] = useState(() => createCache({ key: 'multi-select' }));
  const toOption = (value: string): Option => ({ value, label: value });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Wait until hydration finishes before rendering Emotion-generated styles.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CacheProvider value={cache}>
      <Select<Option, true>
        {...props}
        instanceId={instanceId}
        options={options.map(toOption)}
        value={value?.map(toOption)}
        onChange={(selected) => onChange?.(selected.map(({ value }) => value))}
        isMulti
        isClearable={false}
        unstyled
        classNames={{
          control: ({ isFocused, isDisabled }) =>
            `${styles.control} ${isFocused ? styles.focused : ''} ${isDisabled ? styles.disabled : ''}`,
          valueContainer: () => styles.valueContainer,
          input: () => styles.input,
          placeholder: () => styles.placeholder,
          menu: () => styles.menu,
          menuList: () => styles.menuList,
          option: ({ isFocused, isSelected }) =>
            `${styles.option} ${isFocused ? styles.optionFocused : ''} ${isSelected ? styles.optionSelected : ''}`,
          multiValue: () => styles.multiValue,
          multiValueLabel: () => styles.multiValueLabel,
          multiValueRemove: () => styles.multiValueRemove,
          dropdownIndicator: () => styles.indicator,
          indicatorSeparator: () => styles.separator,
          noOptionsMessage: () => styles.noOptions,
        }}
      />
    </CacheProvider>
  );
};

export default MultiSelect;
