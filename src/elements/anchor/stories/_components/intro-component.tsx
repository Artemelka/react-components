import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
  List,
  ListItem,
} from '../../../../_story-components';

export const IntroComponent = memo(() => (
  <>
    <Intro name="Anchor">
      <List>
        <ListItem isRow>
          Вы можете передать параметр
          <Highlighter isFilled>id</Highlighter>
          и получить его в любом колбэке события.
        </ListItem>
        <ListItem isRow>
          Параметр <Highlighter isFilled>href</Highlighter>
          возвращается в колбэках событий.
        </ListItem>
      </List>
    </Intro>
  </>
));
