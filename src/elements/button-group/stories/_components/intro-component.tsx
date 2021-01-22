import React, { memo } from 'react';
import { Intro, List, ListItem } from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Button-group">
    <List>
      <ListItem>
        Для работы компонента необходимо передать массив параметров для кнопок.
      </ListItem>
      <ListItem>
        Компонент принимает параметр activeId.
      </ListItem>
      <ListItem>
        Для корректной работы activeId необходимо передавать параметр id для каждой кнопки.
      </ListItem>
    </List>
  </Intro>
));
