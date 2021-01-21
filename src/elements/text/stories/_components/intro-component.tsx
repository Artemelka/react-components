import React, { memo } from 'react';
import { Intro } from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Text">
    <p style={{ color: 'red' }}>
      Компонент наследует цвет от родителя
    </p>
  </Intro>
));
