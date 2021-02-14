import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
} from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Layout">
    <p>
      Для работы компонента необходимо передать параметр
      <Highlighter isFilled>children</Highlighter>.
    </p>
    <p>
      Компонент занимает всю допустимую ширну и высоту родителя и
      при переполнении контентом реализует внутренний скролл.
    </p>
    <p>
      Компонент имеет минимальную высоту
      <Highlighter color="error" isFilled>300px</Highlighter>.
    </p>
    <p>Компонент не имеет визуальных стилей оформления.</p>
  </Intro>
));
