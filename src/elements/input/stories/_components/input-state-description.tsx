import React from 'react';
import { GridCell } from '../../../_story-components';

export const InputStateDescription = () => (
  <GridCell fullWidth>
    <p>
      Кликабельная иконка отображается только когда передано value != пустой строке.
    </p>
    <p>Иконка не отображается при состояниях disabled и readOnly.</p>
  </GridCell>
);
