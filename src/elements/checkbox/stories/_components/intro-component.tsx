import React from 'react';
import { Highlighter, Intro } from '../../../../_story-components';

export const IntroComponent = () => (
  <Intro name="Checkbox">
    <p>
      Для того, что бы компонент работал, ему необходимо передать значения
      <Highlighter isFilled>checked</Highlighter>,
      <Highlighter isFilled>id</Highlighter>,
      <Highlighter isFilled>name</Highlighter>,
      и колбэк
      <Highlighter isFilled>OnChange</Highlighter>
      который будет изменять значение
      <Highlighter isFilled>checked</Highlighter>.
    </p>
    <p>
      Все колбэки событий компонента прнимают аргументом объект со значениями
      <Highlighter isFilled>checked</Highlighter>,
      <Highlighter isFilled>event</Highlighter>,
      <Highlighter isFilled>name</Highlighter>.
    </p>
  </Intro>
);
