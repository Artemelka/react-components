import {
  ComponentType,
  FC,
  RefObject,
  SyntheticEvent,
} from 'react';

type Params = {
  event: SyntheticEvent<any>;
}
export type DropdownItemParams = {
  extraData?: Record<string, any>;
  id: string | number;
  value: string;
};
export type CustomDropdownItemProps = DropdownItemParams & {
  itemRef: RefObject<any>;
  onClick: () => void;
  onKeyDown: (params: Params) => void;
  selectedItems?: Array<DropdownItemParams>;
  themeColor: 'base' | 'accent' | 'primary' | 'secondary';
};
export type CustomDropdownItemType =
  ComponentType<CustomDropdownItemProps> | FC<CustomDropdownItemProps>;
export type ItemKeyDownParams = {
  keyCode: number;
  index: number;
  item: DropdownItemParams;
};
