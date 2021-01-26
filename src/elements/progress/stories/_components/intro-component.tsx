import React, { memo } from 'react';
import { Highlighter, Intro } from '../../../_story-components';

export const IntroComponent = memo(({ name }: { name: string }) => (
  <Intro name={name}>
    <p>
      Для работы компонента необходимо передать параметр
      <Highlighter isFilled>percent</Highlighter>.
    </p>
  </Intro>
));
