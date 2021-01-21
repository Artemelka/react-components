import React, { memo } from 'react';
import { Intro } from '../../../_story-components';

export const IntroComponent = memo(({ name }: { name: string }) => (
  <Intro name={name}>
    <p>Для работы компонента необходимо передать параметр percent</p>
  </Intro>
));
