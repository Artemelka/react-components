import React, { memo } from 'react';
import { Intro, List, ListItem } from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="CollapsePanel">
    <p>Для работы компонента необходимо передать параметры:</p>
    <List>
      <ListItem>
        panelTitle - заголовок панели,
      </ListItem>
      <ListItem>
        isOpen - флаг состояния открыта/закрыта,
      </ListItem>
      <ListItem>
        onClick - колбэк события клика по панели,
      </ListItem>
      <ListItem>
        children - содержимое раскрывающейся области панели.
      </ListItem>
    </List>
  </Intro>
));
