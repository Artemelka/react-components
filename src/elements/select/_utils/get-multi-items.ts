import { DropdownItemParams } from '../../dropdown-list/types';

type Params = {
  item: DropdownItemParams;
  values: Array<DropdownItemParams>;
}
export const getMultiItems = ({ item, values }: Params): Array<DropdownItemParams> => {
  const hasInValues = values.some((el) => el.id === item.id);

  return hasInValues
    ? values.filter((el) => el.id !== item.id)
    : [...values, item];
};
