import React, {
  memo,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import { DropdownList, DropdownMultiItem } from '../dropdown-list';
import {
  CustomDropdownItemType,
  DropdownItemParams,
} from '../dropdown-list/types';
import { Input } from '../input';
import { InputIconConfig } from '../input/types';
import { getMultiItems, getValue } from './_utils';
import { IconConfig, SelectChangeEvent, ValuesFormatterType } from './types';
import style from './select.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Select';

type SelectProps = {
  /** Кастомный компонент элемента списка */
  customItem?: CustomDropdownItemType;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** Задает конфиг для отображения иконки в инпуте */
  iconConfig: IconConfig;
  /** уникальный идентификатор (возвращается в onChange) */
  id?: string;
  /** Флаг состояния ошибки */
  isError?: boolean;
  /** Задает режим множественного выбора элементов */
  isMultiSelect?: boolean;
  /** Задает имя инпута (возвращается в onChange) */
  name: string;
  /** Колбэк события изменения значения */
  onChange?: (changeEvent: SelectChangeEvent) => void;
  /** Колбек события клика */
  onClick?: () => void;
  /** Заполнитель пустого значения инпута */
  options?: Array<DropdownItemParams>;
  /** Заполнитель пустого значения инпута */
  placeholder?: string;
  /** Объект для формирования рефа */
  selectRef?: RefObject<HTMLInputElement>;
  /** Задает размер компонента */
  size?: 'small' | 'medium' | 'big';
  /** Задает цветовую тему компонента */
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary';
  /** Содержимое инпута */
  values?: Array<DropdownItemParams>;
  /** Функция преобразования отображаемого значения */
  valuesFormatter?: ValuesFormatterType<any>;
  /** Задает вид компонента */
  variant?: 'base' | 'filled' | 'only-text';
};

export const Select = memo(({
  customItem,
  disabled,
  iconConfig: { iconClose, iconOpen },
  id,
  isError,
  isMultiSelect,
  name,
  onChange = () => false,
  onClick = () => false,
  options = [],
  placeholder,
  selectRef,
  size = 'medium',
  themeColor = 'base',
  values = [],
  valuesFormatter,
  variant = 'base',
}: SelectProps) => {
  const inputRef = selectRef || useRef(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const inputValue = useMemo(() =>
    getValue({ isMultiSelect, values, valuesFormatter }),
  [isMultiSelect, values, valuesFormatter]);

  const handleOutsideClick = useCallback(({ target }: Event) => {
    if (componentRef.current && !componentRef.current.contains(target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);

  const handleSingleChange = useCallback((item: DropdownItemParams) => {
    onChange({ id, items: [item], name });
    setIsOpen(false);
  }, [id, name, onChange]);

  const handleMultiChange = useCallback((item: DropdownItemParams) => {
    onChange({ id, items: getMultiItems({ item, values }), name });
  }, [id, name, onChange, values]);

  const handleChange = useCallback((item: DropdownItemParams) => {
    if (isMultiSelect) {
      handleMultiChange(item);
    } else {
      handleSingleChange(item);
    }
  }, [handleMultiChange, handleSingleChange, isMultiSelect]);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
    onClick();
  }, [isOpen, onClick]);

  const inputIconConfig: InputIconConfig = useMemo(() => ({
    alwaysVisible: true,
    icon: isOpen ? iconClose : iconOpen,
    onClick: handleClick,
  }), [handleClick, iconClose, iconOpen, isOpen]);

  return (
    <div ref={componentRef} className={cn(CLASS_NAME)}>
      <Input
        cursorPointer
        disabled={disabled}
        iconConfig={inputIconConfig}
        id={id}
        inputRef={inputRef}
        isError={isError}
        name={name}
        onClick={handleClick}
        placeholder={placeholder}
        readOnly
        size={size}
        themeColor={themeColor}
        type="text"
        value={inputValue}
        variant={variant}
      />
      {isOpen && (
        <div className={cn(`${CLASS_NAME}__list`)}>
          <DropdownList
            items={options}
            onClick={handleChange}
            selectedItems={values}
            size={size}
            themeColor={themeColor}
            {...(customItem || isMultiSelect
              ? { customItem: customItem || DropdownMultiItem }
              : {})
            }
          />
        </div>
      )}
    </div>
  );
});
