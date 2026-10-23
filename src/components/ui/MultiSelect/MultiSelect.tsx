import { useId } from 'react';
import Select from 'react-select';
import styles from './MultiSelect.module.scss';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  placeholder?: string;
}

const MultiSelect = ({ options, ...props }: Props) => {
  const instanceId = useId();

  return (
    <Select
      {...props}
      instanceId={instanceId}
      options={options}
      isMulti
      isClearable={false}
      unstyled
      classNames={{
        control: ({ isFocused, isDisabled }) =>
          `clipped-corners ${styles.control} ${isFocused ? styles.focused : ''} ${isDisabled ? styles.disabled : ''}`,
        valueContainer: () => styles.valueContainer,
        input: () => styles.input,
        placeholder: () => styles.placeholder,
        menu: () => `clipped-corners ${styles.menu}`,
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
  );
};

export default MultiSelect;
