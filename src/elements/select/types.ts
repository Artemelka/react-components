import { ReactNode } from 'react';
import { DropdownItemParams } from '../dropdown-list/types';

export type IconConfig = {
  iconClose: ReactNode;
  iconOpen: ReactNode;
};

export type SelectChangeEvent = {
  id?: string;
  items: Array<DropdownItemParams>;
  name: string;
};

export type ValuesFormatterParams<T> = {
  isMultiSelect?: boolean;
  values: Array<DropdownItemParams<T>>;
};

export type ValuesFormatterType<T> =
  (params: ValuesFormatterParams<T>) => string;
