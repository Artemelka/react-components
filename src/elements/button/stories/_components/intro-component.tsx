import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
} from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Button">
    <p>
      Компонент принемает параметр
      <Highlighter isFilled>id</Highlighter>
      и возвращает его в колбэках событий.
    </p>
  </Intro>
));
