import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
} from '../../../_story-components';

export const IntroComponent = memo(() => (
  <>
    <Intro name="Label">
      <p>
        Для работы компонента необходимо передать параметр
        <Highlighter isFilled>children</Highlighter>
        - текст лейбла.
      </p>
    </Intro>
  </>
));
