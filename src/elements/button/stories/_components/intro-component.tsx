import React, { memo } from 'react';
import { Intro, List, ListItem } from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Button">
    <List>
      <ListItem>
        Компонент принемает параметр id и возвращает его в колбэках событий
      </ListItem>
      <ListItem>
        Вы можете передать только value, value и icon, только icon.
      </ListItem>
    </List>
  </Intro>
));
