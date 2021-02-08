import {
  ComponentType,
  FocusEvent,
  FC,
  RefObject,
  SyntheticEvent,
} from 'react';

export type DropdownItemEvent = {
  event: SyntheticEvent<any>;
}

export type DropdownItemFocusEvent = {
  event: FocusEvent;
};

export type DropdownItemParams<T = any> = {
  extraData?: T;
  id: string | number;
  value: string;
};
export type CustomDropdownItemProps = DropdownItemParams & {
  itemRef: RefObject<any>;
  onClick: () => void;
  onKeyDown: (params: DropdownItemEvent) => void;
  selectedItems: Array<DropdownItemParams>;
  size?: 'small' | 'medium' | 'big';
  themeColor?: 'base' | 'accent' | 'primary' | 'secondary';
};
export type CustomDropdownItemType =
  ComponentType<CustomDropdownItemProps> | FC<CustomDropdownItemProps>;
export type ItemKeyDownParams = {
  keyCode: number;
  index: number;
  item: DropdownItemParams;
};
