import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
} from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Card">
    <p>
      Для работы компонента необходимо передать
      <Highlighter isFilled>content</Highlighter>,
      <Highlighter isFilled>positionIndex</Highlighter>,
      <Highlighter isFilled>buttonLabel</Highlighter>,
      <Highlighter isFilled>title</Highlighter>,
      и
      <Highlighter isFilled>onClick</Highlighter>.
    </p>
    <p>Компонент занимает всю ширину родителя в диапозоне от 230 до 650 пиклелей.</p>
  </Intro>
));
