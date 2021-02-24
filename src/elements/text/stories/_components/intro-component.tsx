import React, { memo } from 'react';
import { Highlighter, Intro } from '../../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Text">
    <p>
      <Highlighter color="error">
        Компонент наследует цвет от родителя.
      </Highlighter>
    </p>
  </Intro>
));
