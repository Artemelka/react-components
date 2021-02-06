import React, { memo, useMemo } from 'react';
import classNames from 'classnames/bind';
import { Checkbox } from '../../../checkbox';
import { Label } from '../../../label';
import { CustomDropdownItemProps } from '../../types';
import style from './dropdown-multi-item.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Dropdown-multi-item';

export const DropdownMultiItem = memo(({
  extraData = {},
  id,
  itemRef,
  onClick,
  onKeyDown,
  selectedItems = [],
  themeColor,
  value,
}: CustomDropdownItemProps) => {
  const checked = useMemo(() => selectedItems.some((item) => item.id === id), [id, selectedItems]);

  return (
    <div className={cn(CLASS_NAME)}>
      <Checkbox
        checkboxRef={itemRef}
        checked={checked}
        id={id}
        name={extraData.name || id}
        onChange={onClick}
        onKeyDown={onKeyDown}
        themeColor={themeColor}
        variant="only-text"
      />
      <Label
        htmlFor={id}
        isActive={checked}
        position="right"
        themeColor={themeColor}
      >
        {value}
      </Label>
    </div>
  );
});
