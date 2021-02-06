import React, {
  memo,
  RefObject,
  useCallback,
  useMemo,
} from 'react';
import { Button } from '../../../button';
import { KEY_CODES } from '../../../constants';
import { CustomDropdownItemType, DropdownItemParams, ItemKeyDownParams } from '../../types';

const EXCEPT_KEYS = [KEY_CODES.SPACE, KEY_CODES.TAB];

type DropdownItemProps = {
  customItem?: CustomDropdownItemType;
  extraData?: Record<string, any>;
  id: string | number;
  index: number;
  itemRef: RefObject<any>;
  onClick: (item: DropdownItemParams) => void;
  onKeyDown: (params: ItemKeyDownParams) => void;
  selectedItems?: Array<DropdownItemParams>;
  themeColor: 'base' | 'accent' | 'primary' | 'secondary';
  value: string;
};

export const DropdownItem = memo(({
  customItem: CustomItem,
  extraData,
  id,
  index,
  itemRef,
  onClick,
  onKeyDown,
  selectedItems = [],
  themeColor,
  value,
}: DropdownItemProps) => {
  const item = useMemo(() => ({ extraData, id, value }), [extraData, id, value]);

  const handleKeyDown = useCallback(({ event, event: { keyCode } }) => {
    if (!EXCEPT_KEYS.includes(keyCode)) {
      event.preventDefault();
    }

    onKeyDown({ keyCode, index, item });
  }, [index, item, onKeyDown]);

  const handleClick = useCallback(() => onClick(item), [item, onClick]);

  return (
    CustomItem
      ? (
        <CustomItem
          extraData={extraData}
          id={id}
          itemRef={itemRef}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          selectedItems={selectedItems}
          themeColor={themeColor}
          value={value}
        />)
      : (
        <Button
          alignText="left"
          buttonRef={itemRef}
          id={id}
          isFullWidth
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          themeColor={themeColor}
          value={value}
          variant="only-text"
        />
      )
  );
});
