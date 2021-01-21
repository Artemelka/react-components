import React, { memo } from 'react';
import {
  Intro,
  List,
  ListItem,
  StoriesItem,
} from '../../../_story-components';

export const IntroComponent = memo(() => (
  <StoriesItem>
    <Intro name="Anchor">
      <List>
        <ListItem>
          Вы можете передать параметр id и получить его в любом колбэке события.
        </ListItem>
        <ListItem>
          Параметр href возвращается в колбэках событий.
        </ListItem>
        <ListItem>
          Если вам необходимо нативное поведение ссылки - задайте withPreventedEvent = false.
        </ListItem>
      </List>
    </Intro>
  </StoriesItem>
));
