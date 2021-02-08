import { DropdownItemParams } from '../../dropdown-list/types';
import { ValuesFormatterParams } from '../types';

type Params = {
  isMultiSelect?: boolean;
  values: Array<DropdownItemParams>;
  valuesFormatter?: (params: ValuesFormatterParams) => string;
};

export const getValue = ({ isMultiSelect, values, valuesFormatter }: Params): string => {
  if (values.length) {
    if (valuesFormatter) {
      return valuesFormatter({ isMultiSelect, values });
    }

    return isMultiSelect
      ? values.map((item) => item.value).join(', ')
      : values[0].value;
  }

  return '';
};
