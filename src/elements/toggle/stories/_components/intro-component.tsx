import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
} from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Toggle">
    <p>
      Для работы компонента необходимо передать значения
      <Highlighter isFilled>checked</Highlighter>,
      <Highlighter isFilled>id</Highlighter>,
      <Highlighter isFilled>name</Highlighter>,
      и колбэк
      <Highlighter isFilled>OnChange</Highlighter>.
    </p>
    <p>
      Все колбэки событий компонента прнимают аргументом объект со значениями
      <Highlighter isFilled>checked</Highlighter>,
      <Highlighter isFilled>event</Highlighter>,
      <Highlighter isFilled>name</Highlighter>.
    </p>
  </Intro>
));
