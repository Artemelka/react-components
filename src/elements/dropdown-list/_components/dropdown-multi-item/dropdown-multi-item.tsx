import React, { memo, useMemo } from 'react';
import { fastClassName } from '@utils';
import { Checkbox } from '../../../checkbox';
import { Label } from '../../../label';
import { CustomDropdownItemProps } from '../../types';
import style from './dropdown-multi-item.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Dropdown-multi-item';

export const DropdownMultiItem = memo(({
  extraData = {},
  id,
  itemRef,
  onClick,
  onKeyDown,
  selectedItems = [],
  size,
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
        size={size}
        themeColor={themeColor}
        variant="only-text"
      />
      <div className={cn(`${CLASS_NAME}__label`)}>
        <Label
          htmlFor={id}
          isActive={checked}
          isFullWidth
          position="right"
          size={size}
          themeColor={themeColor}
        >
          {value}
        </Label>
      </div>
    </div>
  );
});
