import React, { memo } from 'react';
import { Highlighter } from '../../../../_story-components';

export const CustomPanelDescription = memo(() => (
  <div>
    <p>
      <Highlighter isFilled>panelTitle</Highlighter>
      трансформируется в UPPER_CASE. Если вам это не подходит,
      вы можете передать кастомный компонент параметром
      <Highlighter isFilled>customPanel</Highlighter>.
      В этом случае панель перестанет быть кликабельной и вам придется
      позаботиться о стилях интерактивных элемонтов для открытия панели.
    </p>
    <p>
      <Highlighter color="error">Перестанет работать параметр</Highlighter>
      <Highlighter isFilled>size</Highlighter>.
      Размером панели вы будете управлять сами.
    </p>
  </div>
));
