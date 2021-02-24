import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
} from '../../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="RadioGroup">
    <p>
      Для работы компонента необходимо передать значения
      <Highlighter isFilled>items</Highlighter>,
      <Highlighter isFilled>name</Highlighter>,
      <Highlighter isFilled>value</Highlighter>
      и колбэк
      <Highlighter isFilled>onChange</Highlighter>.
    </p>
    <p>
      Колбэк прнимает аргументом объект со значениями
      <Highlighter isFilled>event</Highlighter>,
      <Highlighter isFilled>name</Highlighter>,
      <Highlighter isFilled>value</Highlighter>.
    </p>
  </Intro>
));
